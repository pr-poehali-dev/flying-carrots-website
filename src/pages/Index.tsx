import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface FlyingCarrot {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  animation: 'float' | 'float-slow' | 'float-fast';
}

const carrotTypes = [
  {
    emoji: '🥕',
    name: 'Классическая морковка',
    description: 'Сочная оранжевая красавица',
    color: 'from-orange-400 to-orange-600'
  },
  {
    emoji: '🎨',
    name: 'Радужная морковка',
    description: 'Разноцветное чудо природы',
    color: 'from-purple-400 to-pink-600'
  },
  {
    emoji: '✨',
    name: 'Волшебная морковка',
    description: 'Со сверкающим эффектом',
    color: 'from-yellow-400 to-amber-600'
  },
  {
    emoji: '🌟',
    name: 'Звёздная морковка',
    description: 'Прилетела из космоса',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    emoji: '🔥',
    name: 'Огненная морковка',
    description: 'Горячая и острая',
    color: 'from-red-400 to-orange-600'
  },
  {
    emoji: '🌿',
    name: 'Эко морковка',
    description: 'Выращена с любовью',
    color: 'from-green-400 to-emerald-600'
  }
];

export default function Index() {
  const [flyingCarrots, setFlyingCarrots] = useState<FlyingCarrot[]>([]);

  useEffect(() => {
    const carrots: FlyingCarrot[] = [];
    const animations: ('float' | 'float-slow' | 'float-fast')[] = ['float', 'float-slow', 'float-fast'];
    
    for (let i = 0; i < 15; i++) {
      carrots.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 30 + Math.random() * 40,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 2,
        animation: animations[Math.floor(Math.random() * animations.length)]
      });
    }
    
    setFlyingCarrots(carrots);
  }, []);

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    gallerySection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToJoin = () => {
    const joinSection = document.getElementById('join');
    joinSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {flyingCarrots.map((carrot) => (
        <div
          key={carrot.id}
          className={`fixed pointer-events-none z-10 animate-${carrot.animation} opacity-60`}
          style={{
            left: `${carrot.left}%`,
            top: `${carrot.top}%`,
            fontSize: `${carrot.size}px`,
            animationDelay: `${carrot.delay}s`
          }}
        >
          🥕
        </div>
      ))}

      <section className="relative z-20 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-bounce-in">
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6 drop-shadow-lg">
              🥕 Морковное царство 🥕
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-4 font-medium">
              Добро пожаловать в мир летающих морковок!
            </p>
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent animate-pulse drop-shadow-2xl mb-8">
              ркн сынша лавы
            </h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button onClick={scrollToJoin} size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-xl hover:scale-105 transition-transform">
                <Icon name="Sparkles" className="mr-2" size={24} />
                Начать приключение
              </Button>
              <Button onClick={scrollToGallery} size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-xl hover:scale-105 transition-transform">
                <Icon name="Image" className="mr-2" size={24} />
                Смотреть галерею
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="relative z-20 px-4 py-20 bg-gradient-to-b from-transparent to-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Коллекция морковок
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Познакомься с нашими удивительными морковками!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carrotTypes.map((carrot, index) => (
              <Card 
                key={index}
                className="hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl animate-fade-in border-2 border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-7xl mb-4 animate-float">
                    {carrot.emoji}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {carrot.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {carrot.description}
                  </p>
                  <div className={`h-2 rounded-full bg-gradient-to-r ${carrot.color}`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="relative z-20 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card p-12 rounded-3xl shadow-2xl border-4 border-primary">
            <div className="text-8xl mb-6 animate-float-slow">🥕</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Присоединяйся к нам!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Стань частью самого весёлого морковного сообщества в мире
            </p>
            <Button size="lg" className="text-xl px-10 py-7 bg-secondary hover:bg-secondary/90 shadow-xl hover:scale-105 transition-transform">
              <Icon name="Heart" className="mr-2" size={24} />
              Присоединиться
            </Button>
          </div>
        </div>
      </section>

      <footer className="relative z-20 bg-primary/10 py-12 text-center">
        <p className="text-lg text-foreground/70 mb-6">
          🥕 Сделано с любовью к морковкам 🥕
        </p>
        <h3 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
          ркн сынша лавы
        </h3>
      </footer>
    </div>
  );
}