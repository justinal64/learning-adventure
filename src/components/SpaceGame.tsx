import React, { useEffect, useRef, useState } from 'react';

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  speed?: number;
  type?: 'asteroid' | 'powerup';
}

const SpaceGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Game state
  const gameState = useRef({
    ship: { x: 0, y: 0, width: 40, height: 40 },
    asteroids: [] as GameObject[],
    powerups: [] as GameObject[],
    keys: { ArrowLeft: false, ArrowRight: false, ArrowUp: false, ArrowDown: false },
    animationFrame: 0,
    images: {
      ship: new Image(),
      asteroid: new Image(),
      powerup: new Image()
    }
  });

  // Load images
  useEffect(() => {
    let loadedImages = 0;
    const totalImages = 3;

    const onImageLoad = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setImagesLoaded(true);
      }
    };

    const { images } = gameState.current;
    
    images.ship.onload = onImageLoad;
    images.asteroid.onload = onImageLoad;
    images.powerup.onload = onImageLoad;

    images.ship.src = 'https://assets.codepen.io/123456/spaceship.png';
    images.asteroid.src = 'https://assets.codepen.io/123456/asteroid.png';
    images.powerup.src = 'https://assets.codepen.io/123456/powerup.png';

    return () => {
      images.ship.onload = null;
      images.asteroid.onload = null;
      images.powerup.onload = null;
    };
  }, []);

  // Game initialization
  const initGame = () => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Reset game state
    gameState.current.ship = {
      x: canvas.width / 2 - 20,
      y: canvas.height - 60,
      width: 40,
      height: 40,
    };
    gameState.current.asteroids = [];
    gameState.current.powerups = [];
    setScore(0);
    setGameOver(false);
    setGameStarted(true);

    // Start game loop
    gameLoop();
  };

  // Game loop
  const gameLoop = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update game objects
    updateShip();
    updateAsteroids();
    updatePowerups();
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
    const speed = 5;

    if (keys.ArrowLeft) ship.x = Math.max(0, ship.x - speed);
    if (keys.ArrowRight) ship.x = Math.min(canvasRef.current!.width - ship.width, ship.x + speed);
    if (keys.ArrowUp) ship.y = Math.max(0, ship.y - speed);
    if (keys.ArrowDown) ship.y = Math.min(canvasRef.current!.height - ship.height, ship.y + speed);
  };

  // Update asteroids
  const updateAsteroids = () => {
    const { asteroids } = gameState.current;
    
    // Add new asteroids
    if (Math.random() < 0.02) {
      asteroids.push({
        x: Math.random() * (canvasRef.current!.width - 30),
        y: -30,
        width: 30,
        height: 30,
        speed: 2 + Math.random() * 2,
        type: 'asteroid',
      });
    }

    // Move asteroids
    for (let i = asteroids.length - 1; i >= 0; i--) {
      asteroids[i].y += asteroids[i].speed!;
      if (asteroids[i].y > canvasRef.current!.height) {
        asteroids.splice(i, 1);
        setScore(prev => prev + 1);
      }
    }
  };

  // Update powerups
  const updatePowerups = () => {
    const { powerups } = gameState.current;
    
    // Add new powerups
    if (Math.random() < 0.005) {
      powerups.push({
        x: Math.random() * (canvasRef.current!.width - 20),
        y: -20,
        width: 20,
        height: 20,
        speed: 1,
        type: 'powerup',
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

  // Check collisions
  const checkCollisions = () => {
    const { ship, asteroids, powerups } = gameState.current;

    // Check asteroid collisions
    for (let asteroid of asteroids) {
      if (detectCollision(ship, asteroid)) {
        endGame();
        return;
      }
    }

    // Check powerup collisions
    for (let i = powerups.length - 1; i >= 0; i--) {
      if (detectCollision(ship, powerups[i])) {
        powerups.splice(i, 1);
        setScore(prev => prev + 10);
      }
    }
  };

  // Collision detection helper
  const detectCollision = (obj1: GameObject, obj2: GameObject) => {
    return (
      obj1.x < obj2.x + obj2.width &&
      obj1.x + obj1.width > obj2.x &&
      obj1.y < obj2.y + obj2.height &&
      obj1.y + obj1.height > obj2.y
    );
  };

  // Draw game objects
  const drawGame = (ctx: CanvasRenderingContext2D) => {
    if (!imagesLoaded) return;

    const { ship, asteroids, powerups, images } = gameState.current;

    // Draw ship
    ctx.drawImage(images.ship, ship.x, ship.y, ship.width, ship.height);

    // Draw asteroids
    asteroids.forEach(asteroid => {
      ctx.drawImage(images.asteroid, asteroid.x, asteroid.y, asteroid.width, asteroid.height);
    });

    // Draw powerups
    powerups.forEach(powerup => {
      ctx.drawImage(images.powerup, powerup.x, powerup.y, powerup.width, powerup.height);
    });

    // Draw score
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 30);
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

  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <div className="flex flex-col items-center">
        <canvas
          ref={canvasRef}
          width={600}
          height={400}
          className="bg-black rounded-lg mb-4"
        />
        
        {!gameStarted && !gameOver && (
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">Space Adventure</h3>
            <p className="text-gray-300 mb-4">
              Use arrow keys to navigate your spaceship. Avoid asteroids and collect power-ups!
            </p>
            <button
              onClick={initGame}
              disabled={!imagesLoaded}
              className={`px-6 py-2 rounded-lg font-bold transition ${
                imagesLoaded 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              {imagesLoaded ? 'Start Game' : 'Loading...'}
            </button>
          </div>
        )}

        {gameOver && (
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Game Over!</h3>
            <p className="text-gray-300 mb-2">Score: {score}</p>
            <p className="text-gray-300 mb-4">High Score: {highScore}</p>
            <button
              onClick={initGame}
              disabled={!imagesLoaded}
              className={`px-6 py-2 rounded-lg font-bold transition ${
                imagesLoaded 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              {imagesLoaded ? 'Play Again' : 'Loading...'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpaceGame;