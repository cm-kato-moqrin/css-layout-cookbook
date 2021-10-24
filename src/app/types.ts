export interface Card {
  imageUrl: string;
  imageAlt: string;
  balloonCount: string | number;
  header: string;
  content: string;
  badgeColor: string;
  badgeStatus: string;
  isFooter: boolean;
  footerContent?: string;
}
