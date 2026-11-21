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
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-presentations",
          title: "Presentations",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-service",
          title: "Service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "news-defended-my-phd-thesis-towards-an-integration-of-learning-and-reasoning-in-agent-and-multi-agent-systems-at-the-university-of-pisa",
          title: 'Defended my PhD thesis Towards an Integration of Learning and Reasoning in Agent...',
          description: "",
          section: "News",},{id: "news-started-as-a-postdoctoral-researcher-at-amsterdam-umc",
          title: 'Started as a postdoctoral researcher at Amsterdam UMC.',
          description: "",
          section: "News",},{id: "news-published-the-editorial-from-detection-to-deployment-ai-for-culprit-vessel-identification-and-the-path-to-practice-in-bmj-digital-health-amp-amp-ai",
          title: 'Published the editorial From detection to deployment: AI for culprit vessel identification and...',
          description: "",
          section: "News",},{id: "news-presented-stop-replacing-salt-with-sugar-towards-intuitive-human-agent-teaching-at-eumas-2025-in-bucharest",
          title: 'Presented Stop Replacing Salt with Sugar! Towards Intuitive Human-Agent Teaching at EUMAS 2025...',
          description: "",
          section: "News",},{id: "news-our-paper-on-empathy-aware-behavior-trees-and-knowledge-graphs-for-human-ai-teaming-was-published-in-ieee-transactions-on-affective-computing",
          title: 'Our paper on empathy-aware behavior trees and knowledge graphs for human-AI teaming was...',
          description: "",
          section: "News",},{id: "news-gave-the-talk-translational-ai-and-applications-in-cardiology-at-the-acs-symposium-artificial-intelligence-amsterdam-umc",
          title: 'Gave the talk Translational AI and Applications in Cardiology at the ACS Symposium...',
          description: "",
          section: "News",},{id: "news-co-organized-fomo4cdm-a-session-on-foundation-models-for-clinical-decision-making-at-bnaic-benelearn-2026-in-maastricht",
          title: 'Co-organized FOMO4CDM, a session on Foundation Models for Clinical Decision Making at BNAIC/BeNeLearn...',
          description: "",
          section: "News",},{id: "news-presented-our-poster-periscope-machine-learning-models-for-predicting-mortality-in-patients-with-stemi-following-pci-at-the-esc-digital-amp-amp-ai-summit-2026-in-basel",
          title: 'Presented our poster PERISCOPE: machine-learning models for predicting mortality in patients with STEMI...',
          description: "",
          section: "News",},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/andrea-rafanelli", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/andrearafanelli", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Nkn-I1kAAAAJ", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/332/1524.html", "_blank");
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
