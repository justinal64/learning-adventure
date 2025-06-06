import React, { useEffect, useRef, useState } from 'react';

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  speed?: number;
  type?: 'asteroid' | 'powerup';
  glowColor?: string;
  glowRadius?: number;
}

interface TouchInfo {
  isDragging: boolean;
  startX: number;
  startY: number;
  lastX: number;
  lastY: number;
}

const SpaceGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);
  const [scoreAnimation, setScoreAnimation] = useState({ active: false, value: 0, x: 0, y: 0 });
  const audioRef = useRef<{ [key: string]: HTMLAudioElement }>({});
  const touchRef = useRef<TouchInfo>({
    isDragging: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0
  });

  // Game state
  const gameState = useRef({
    ship: { x: 0, y: 0, width: 50, height: 50, glowColor: '#4299e1', glowRadius: 20 },
    asteroids: [] as GameObject[],
    powerups: [] as GameObject[],
    keys: { ArrowLeft: false, ArrowRight: false, ArrowUp: false, ArrowDown: false },
    animationFrame: 0,
    images: {
      ship: new Image(),
      asteroid: new Image(),
      powerup: new Image()
    },
    collisionEffects: [] as { x: number; y: number; radius: number; alpha: number }[],
    touchFeedback: { active: false, x: 0, y: 0, radius: 30, alpha: 0.3 }
  });

  // Load images and audio
  useEffect(() => {
    let loadedImages = 0;
    const totalImages = 3;
    let hasError = false;

    const onImageLoad = () => {
      if (hasError) return;
      loadedImages++;
      if (loadedImages === totalImages) {
        setImagesLoaded(true);
        setLoadError(false);
      }
    };

    const onImageError = () => {
      hasError = true;
      setLoadError(true);
      setImagesLoaded(false);
    };

    const { images } = gameState.current;
    
    images.ship.src = 'https://images.pexels.com/photos/8474484/pexels-photo-8474484.jpeg?auto=compress&cs=tinysrgb&w=50';
    images.asteroid.src = 'https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=50';
    images.powerup.src = 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=50';

    images.ship.onload = onImageLoad;
    images.asteroid.onload = onImageLoad;
    images.powerup.onload = onImageLoad;

    images.ship.onerror = onImageError;
    images.asteroid.onerror = onImageError;
    images.powerup.onerror = onImageError;

    // Initialize audio
    audioRef.current = {
      collision: new Audio('data:audio/wav;base64,UklGRl9vT19...'), // Base64 collision sound
      powerup: new Audio('data:audio/wav;base64,UklGRl9vT19...'), // Base64 powerup sound
      score: new Audio('data:audio/wav;base64,UklGRl9vT19...') // Base64 score sound
    };

    return () => {
      images.ship.onload = null;
      images.ship.onerror = null;
      images.asteroid.onload = null;
      images.asteroid.onerror = null;
      images.powerup.onload = null;
      images.powerup.onerror = null;
    };
  }, []);

  // Game initialization
  const initGame = () => {
    if (!imagesLoaded || loadError) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Reset game state
    gameState.current.ship = {
      x: canvas.width / 2 - 25,
      y: canvas.height - 70,
      width: 50,
      height: 50,
      glowColor: '#4299e1',
      glowRadius: 20
    };
    gameState.current.asteroids = [];
    gameState.current.powerups = [];
    gameState.current.collisionEffects = [];
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
    setScoreAnimation({ active: false, value: 0, x: 0, y: 0 });

    // Start game loop
    gameLoop();
  };

  // Game loop
  const gameLoop = () => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesLoaded) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update game objects
    updateShip();
    updateAsteroids();
    updatePowerups();
    updateCollisionEffects();
    checkCollisions();

    // Draw game objects
    drawGame(ctx);

    // Continue game loop
    if (!gameOver) {
      gameState.current.animationFrame = requestAnimationFrame(gameLoop);
    }
  };

  // Update ship position
  const updateShip = () => {
    const { ship, keys } = gameState.current;
    const speed = 6;

    if (keys.ArrowLeft) ship.x = Math.max(0, ship.x - speed);
    if (keys.ArrowRight) ship.x = Math.min(canvasRef.current!.width - ship.width, ship.x + speed);
    if (keys.ArrowUp) ship.y = Math.max(0, ship.y - speed);
    if (keys.ArrowDown) ship.y = Math.min(canvasRef.current!.height - ship.height, ship.y + speed);
  };

  // Update asteroids with improved scoring
  const updateAsteroids = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { asteroids } = gameState.current;
    
    // Add new asteroids
    if (Math.random() < 0.02) {
      asteroids.push({
        x: Math.random() * (canvas.width - 40),
        y: -40,
        width: 40,
        height: 40,
        speed: 3 + Math.random() * 2,
        type: 'asteroid',
        glowColor: '#f56565',
        glowRadius: 15
      });
    }

    // Move asteroids and update score
    for (let i = asteroids.length - 1; i >= 0; i--) {
      const asteroid = asteroids[i];
      if (!asteroid) continue;

      asteroid.y += asteroid.speed!;
      
      if (asteroid.y > canvas.height) {
        const { x, y } = asteroid;
        asteroids.splice(i, 1);
        
        // Add score animation
        setScoreAnimation({
          active: true,
          value: 1,
          x,
          y
        });
        
        setScore(prev => prev + 1);
        audioRef.current.score?.play().catch(() => {});
      }
    }
  };

  // Update powerups
  const updatePowerups = () => {
    const { powerups } = gameState.current;
    
    // Add new powerups
    if (Math.random() < 0.005) {
      powerups.push({
        x: Math.random() * (canvasRef.current!.width - 30),
        y: -30,
        width: 30,
        height: 30,
        speed: 2,
        type: 'powerup',
        glowColor: '#48bb78',
        glowRadius: 20
      });
    }

    // Move powerups
    for (let i = powerups.length - 1; i >= 0; i--) {
      powerups[i].y += powerups[i].speed!;
      if (powerups[i].y > canvasRef.current!.height) {
        powerups.splice(i, 1);
      }
    }
  };

  // Update collision effects
  const updateCollisionEffects = () => {
    const { collisionEffects } = gameState.current;
    
    for (let i = collisionEffects.length - 1; i >= 0; i--) {
      collisionEffects[i].radius += 2;
      collisionEffects[i].alpha -= 0.05;
      
      if (collisionEffects[i].alpha <= 0) {
        collisionEffects.splice(i, 1);
      }
    }
  };

  // Check collisions with improved hit detection and scoring
  const checkCollisions = () => {
    const { ship, asteroids, powerups, collisionEffects } = gameState.current;

    // Check asteroid collisions with improved hit boxes
    for (let asteroid of asteroids) {
      const hitbox = {
        x: asteroid.x + asteroid.width * 0.2,
        y: asteroid.y + asteroid.height * 0.2,
        width: asteroid.width * 0.6,
        height: asteroid.height * 0.6
      };

      if (detectCollision(ship, hitbox)) {
        // Add collision effect
        collisionEffects.push({
          x: asteroid.x + asteroid.width / 2,
          y: asteroid.y + asteroid.height / 2,
          radius: 10,
          alpha: 1
        });

        // Play collision sound
        audioRef.current.collision?.play().catch(() => {});
        
        endGame();
        return;
      }
    }

    // Check powerup collisions with score animation
    for (let i = powerups.length - 1; i >= 0; i--) {
      if (detectCollision(ship, powerups[i])) {
        // Add collection effect
        collisionEffects.push({
          x: powerups[i].x + powerups[i].width / 2,
          y: powerups[i].y + powerups[i].height / 2,
          radius: 10,
          alpha: 1
        });

        // Add score animation
        setScoreAnimation({
          active: true,
          value: 10,
          x: powerups[i].x,
          y: powerups[i].y
        });

        // Play powerup sound
        audioRef.current.powerup?.play().catch(() => {});

        powerups.splice(i, 1);
        setScore(prev => prev + 10);
      }
    }
  };

  // Improved collision detection
  const detectCollision = (obj1: GameObject, obj2: GameObject) => {
    const margin = 0.8; // 20% smaller hitbox
    return (
      obj1.x + obj1.width * (1 - margin) / 2 < obj2.x + obj2.width &&
      obj1.x + obj1.width * (1 + margin) / 2 > obj2.x &&
      obj1.y + obj1.height * (1 - margin) / 2 < obj2.y + obj2.height &&
      obj1.y + obj1.height * (1 + margin) / 2 > obj2.y
    );
  };

  // Draw game objects with improved score display
  const drawGame = (ctx: CanvasRenderingContext2D) => {
    if (!imagesLoaded) return;

    const { ship, asteroids, powerups, collisionEffects, images, touchFeedback } = gameState.current;

    try {
      // Draw glow effects
      const drawGlow = (obj: GameObject) => {
        if (!obj.glowColor || !obj.glowRadius) return;
        
        const gradient = ctx.createRadialGradient(
          obj.x + obj.width / 2,
          obj.y + obj.height / 2,
          0,
          obj.x + obj.width / 2,
          obj.y + obj.height / 2,
          obj.glowRadius
        );
        
        gradient.addColorStop(0, `${obj.glowColor}99`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(
          obj.x - obj.glowRadius,
          obj.y - obj.glowRadius,
          obj.width + obj.glowRadius * 2,
          obj.height + obj.glowRadius * 2
        );
      };

      // Draw ship with glow
      drawGlow(ship);
      ctx.drawImage(images.ship, ship.x, ship.y, ship.width, ship.height);

      // Draw asteroids with glow
      asteroids.forEach(asteroid => {
        drawGlow(asteroid);
        ctx.drawImage(images.asteroid, asteroid.x, asteroid.y, asteroid.width, asteroid.height);
      });

      // Draw powerups with glow
      powerups.forEach(powerup => {
        drawGlow(powerup);
        ctx.drawImage(images.powerup, powerup.x, powerup.y, powerup.width, powerup.height);
      });

      // Draw collision effects
      collisionEffects.forEach(effect => {
        ctx.beginPath();
        ctx.arc(effect.x, effect.y, effect.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${effect.alpha})`;
        ctx.fill();
      });

      // Draw touch feedback if active
      if (touchFeedback.active) {
        ctx.beginPath();
        ctx.arc(touchFeedback.x, touchFeedback.y, touchFeedback.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${touchFeedback.alpha})`;
        ctx.fill();
      }

      // Draw score with animation
      if (scoreAnimation.active) {
        ctx.save();
        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.textAlign = 'center';
        ctx.fillText(`+${scoreAnimation.value}`, scoreAnimation.x, scoreAnimation.y);
        ctx.restore();
        
        // Reset score animation after a short delay
        setTimeout(() => {
          setScoreAnimation({ active: false, value: 0, x: 0, y: 0 });
        }, 500);
      }

      // Draw tutorial overlay
      if (showTutorial && !gameOver && gameStarted) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Touch and drag to move', ctx.canvas.width / 2, ctx.canvas.height / 2);
        ctx.font = '18px Arial';
        ctx.fillText('Tap anywhere to begin', ctx.canvas.width / 2, ctx.canvas.height / 2 + 40);
      }

      // Draw score with improved visibility
      ctx.save();
      // Draw score background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.roundRect(10, 10, 120, 40, 20);
      ctx.fill();
      
      // Draw score text with shadow
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 5;
      ctx.fillStyle = 'white';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(`Score: ${score}`, 20, 38);
      ctx.restore();
    } catch (error) {
      console.error('Error drawing game objects:', error);
      endGame();
    }
  };

  // End game
  const endGame = () => {
    setGameOver(true);
    setHighScore(prev => Math.max(prev, score));
    cancelAnimationFrame(gameState.current.animationFrame);
  };

  // Event listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState.current.keys.hasOwnProperty(e.key)) {
        gameState.current.keys[e.key as keyof typeof gameState.current.keys] = true;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (gameState.current.keys.hasOwnProperty(e.key)) {
        gameState.current.keys[e.key as keyof typeof gameState.current.keys] = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(gameState.current.animationFrame);
    };
  }, []);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    touchRef.current = {
      isDragging: true,
      startX: x,
      startY: y,
      lastX: x,
      lastY: y
    };

    // Show touch feedback
    gameState.current.touchFeedback = {
      active: true,
      x,
      y,
      radius: 30,
      alpha: 0.3
    };

    // Hide tutorial after first touch
    setShowTutorial(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (!touchRef.current.isDragging) return;

    const touch = e.touches[0];
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    // Calculate movement delta
    const deltaX = x - touchRef.current.lastX;
    const deltaY = y - touchRef.current.lastY;

    // Update ship position with smooth movement
    const { ship } = gameState.current;
    const sensitivity = 1.2; // Adjust for children's fingers
    
    ship.x = Math.max(0, Math.min(canvas.width - ship.width, ship.x + deltaX * sensitivity));
    ship.y = Math.max(0, Math.min(canvas.height - ship.height, ship.y + deltaY * sensitivity));

    // Update touch feedback position
    gameState.current.touchFeedback = {
      ...gameState.current.touchFeedback,
      x,
      y
    };

    // Update last position
    touchRef.current.lastX = x;
    touchRef.current.lastY = y;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    touchRef.current.isDragging = false;
    gameState.current.touchFeedback.active = false;
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <div className="flex flex-col items-center">
        <canvas
          ref={canvasRef}
          width={600}
          height={400}
          className="bg-black rounded-lg mb-4 shadow-xl touch-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
        
        {loadError && (
          <div className="text-red-500 mb-4">
            Failed to load game assets. Please try refreshing the page.
          </div>
        )}
        
        {!gameStarted && !gameOver && (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Space Adventure</h3>
            <p className="text-gray-300 mb-4">
              Use arrow keys to navigate your spaceship. Avoid asteroids and collect power-ups!
            </p>
            <button
              onClick={initGame}
              disabled={!imagesLoaded || loadError}
              className={`px-6 py-2 rounded-lg font-bold transition ${
                imagesLoaded && !loadError
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              {loadError ? 'Error Loading' : imagesLoaded ? 'Start Game' : 'Loading...'}
            </button>
          </div>
        )}

        {gameOver && (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Game Over!</h3>
            <p className="text-gray-300 mb-2">Score: {score}</p>
            <p className="text-gray-300 mb-4">High Score: {highScore}</p>
            <button
              onClick={initGame}
              disabled={!imagesLoaded || loadError}
              className={`px-6 py-2 rounded-lg font-bold transition ${
                imagesLoaded && !loadError
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              {loadError ? 'Error Loading' : imagesLoaded ? 'Play Again' : 'Loading...'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpaceGame;