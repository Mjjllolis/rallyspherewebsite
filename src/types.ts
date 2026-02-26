export interface IMenuItem {
    text: string;
    url: string;
}

export interface IBenefit {
    title: string;
    description: string;
    imageSrc?: string;
    bullets: IBenefitBullet[]
}

export interface IBenefitBullet {
    title: string;
    description: string;
    icon: JSX.Element;
}

export interface IPricing {
    name: string;
    price: number | string;
    features: string[];
}

export interface IFAQ {
    question: string;
    answer: string;
}

export interface ITestimonial {
    name: string;
    role: string;
    message: string;
    avatar: string;
}

export interface IStats {
    title: string;
    icon: JSX.Element;
    description: string;
}

export interface ISocials {
    facebook?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
    threads?: string;
    twitter?: string;
    youtube?: string;
    x?: string;
    [key: string]: string | undefined;
}

// Features section types
export interface IFeatureBullet {
    title: string;
    description: string;
    icon: JSX.Element;
}

export interface IAccordionItem {
    title: string;
    bullets: IFeatureBullet[];
}

export interface IFeatureCard {
    title: string;
    description: string;
    icon: JSX.Element;
}

export interface ICarouselSlide {
    label: string;
    imageSrc: string;
    bullets: IFeatureBullet[];
}

export interface ICreatorHighlight {
    title: string;
    description: string;
    icon: JSX.Element;
}