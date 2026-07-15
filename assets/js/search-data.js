// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-book-project",
              title: "Book Project",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/book-project/";
              },
            },{id: "dropdown-articles",
              title: "Articles",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/articles/";
              },
            },{id: "dropdown-in-progress",
              title: "In Progress",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/in-progress/";
              },
            },{id: "dropdown-reviews",
              title: "Reviews",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/reviews/";
              },
            },{id: "dropdown-other-writing",
              title: "Other Writing",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/other-writing/";
              },
            },{id: "dropdown-survey-data",
              title: "Survey Data",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/survey-data/";
              },
            },{id: "dropdown-electoral-data",
              title: "Electoral Data",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/electoral-data/";
              },
            },{id: "dropdown-legislative-data",
              title: "Legislative Data",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/legislative-data/";
              },
            },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-students",
          title: "Students",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/students/";
          },
        },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/tavana_cv_20260301.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%61%76%61%6E%61@%70%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=j2a1_doAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-0633-2829", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/danieltavana.bsky.social", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/danieltavana", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/danieltavana", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
