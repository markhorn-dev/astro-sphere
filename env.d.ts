declare namespace NodeJS {
  interface ProcessEnv {
    // Server Configurations
    DB_PATH: string;

    // Site Configurations
    NEXT_PUBLIC_SITE_TITLE: string;
    NEXT_PUBLIC_SITE_DESCRIPTION: string;
    /**
     * @example "https://nextjs-astro-sphere.vercel.app"
     */
    NEXT_PUBLIC_SITE_BASEURL: string;

    // Author Configurations
    NEXT_PUBLIC_AUTHOR_NAME: string;
    NEXT_PUBLIC_AUTHOR_EMAIL: string;
    NEXT_PUBLIC_AUTHOR_LINK: string;
    // Base64 Image Format or URL
    NEXT_PUBLIC_AUTHOR_AVATAR: string;

    // Navigation Configurations
    NEXT_PUBLIC_NAV_HOME_TEXT: string;
    NEXT_PUBLIC_NAV_CAREERS_TEXT: string;
    NEXT_PUBLIC_NAV_BLOG_TEXT: string;
    NEXT_PUBLIC_NAV_PROJECTS_TEXT: string;

    // Welcome Page Configurations
    NEXT_PUBLIC_WELCOME_CAPTION: string;
    NEXT_PUBLIC_WELCOME_TITLE: string;
    NEXT_PUBLIC_WELCOME_SUBTITLE: string;
    NEXT_PUBLIC_WELCOME_PRIMARY_TEXT: string;
    NEXT_PUBLIC_WELCOME_SECONDARY_TEXT: string;
    NEXT_PUBLIC_WELCOME_INTRODUCE: string;

    // Skill Stacks Configurations
    /**
     * @example "JavaScript:https://www.javascript.com;TypeScript:https://typescriptlang.org/"
     */
    NEXT_PUBLIC_STACKS: string;

    // Social Links Configurations
    /**
     * @example "GitHub:https://github.com/luasenvy"
     */
    NEXT_PUBLIC_SOCIAL_GITHUB: string;

    /**
     * @example "LinkedIn:https://www.linkedin.com/in/%EB%AF%BC%EA%B7%9C-%EC%95%88-102403230/"
     */
    NEXT_PUBLIC_SOCIAL_LINKEDIN: string;

    /**
     * @example "X:https://x.com/luasenvy"
     */
    NEXT_PUBLIC_SOCIAL_X: string;

    // Logo Configurations
    // Base64 Image Format or URL
    NEXT_PUBLIC_LOGO_LIGHT: string;
    // Base64 Image Format or URL
    NEXT_PUBLIC_LOGO_DARK: string;

    // Pagination Configurations
    NEXT_PUBLIC_PGN_SIZE: string;
  }
}
