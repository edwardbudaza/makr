import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ActionButton } from './action-button';

type PricingCard = {
  title: string;
  description: string;
  price: string;
  duration: string;
  highlight: string;
  features: string[];
  priceId: string;
};

interface PricingCardProps {
  card: PricingCard;
}

export const PricingCard: React.FC<PricingCardProps> = ({ card }) => {
  const isUnlimited = card.title === 'Unlimited Saas';

  return (
    <Card
      className={cn(
        'w-[300px] flex flex-col justify-between transition-all duration-300',
        'hover:scale-105 hover:shadow-xl',
        isUnlimited && [
          'border-2 border-primary relative',
          // Move the pseudo-element behind the card content
          'after:absolute after:inset-0 after:border-2 after:border-primary/50',
          'after:rounded-lg after:scale-[1.02] after:opacity-0 after:transition-all after:-z-10',
          'hover:after:scale-105 hover:after:opacity-100',
        ],
      )}
    >
      <CardHeader>
        <CardTitle className={cn(isUnlimited && 'text-primary')}>
          {card.title}
        </CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold">{card.price}</span>
          {card.duration && (
            <span className="text-lg font-medium text-muted-foreground">
              /{card.duration}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="space-y-2">
          {card.features.map((feature) => (
            <div key={feature} className="flex gap-2 items-center">
              <Check
                className={cn(
                  'w-5 h-5',
                  isUnlimited ? 'text-primary' : 'text-muted-foreground',
                )}
              />
              <p className="text-sm">{feature}</p>
            </div>
          ))}
        </div>
        <ActionButton
          href={`/agency?plan=${card.priceId}`}
          variant={isUnlimited ? 'primary' : 'default'}
          className={cn(
            'w-full text-center relative z-10', // Add z-index to ensure button is clickable
            isUnlimited
              ? 'hover:bg-primary/90'
              : 'hover:bg-muted-foreground/90',
          )}
        >
          Get Started
        </ActionButton>
      </CardFooter>
    </Card>
  );
};
