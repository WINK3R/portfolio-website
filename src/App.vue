<script setup>
import Header from './components/HeaderContainer.vue'
import HeroContainer from './components/HeroContainer.vue';
import ShowcaseBanner from "./components/ShowcaseBanner.vue";
import GridSkill from "./components/GridSkill.vue";
import BannerCell from "./components/BannerCell.vue";
import ListExperience from "./components/ListExperience.vue";
import ExperienceCell from "./components/ExperienceCell.vue";
import {ref, onMounted, onUnmounted, computed} from 'vue';
import ProjectShow from "./components/ProjectShow.vue";
import Footer from "./components/Footer.vue";

const langages = [
  { name: 'Vue.js', image: 'vuejs.png' },
  { name: 'Flutter', image: 'flutter.png' },
  { name: 'React', image: 'react.png' },
  { name: 'JavaScript', image: 'javascript.png' },
  { name: 'Swift', image: 'swift.png' },
  { name: 'HTML', image: 'html.png' },
  { name: 'Python', image: 'python.png' }
];
const experiences = [
  {
    duration: "10 semaines",
    year: "2023",
    image: "inrae-blue.png",
    company: "INRAE",
    description: "Stage de 10 semaines portant sur l’élaboration d’un jeu sérieux (quizz) sur un site web à " +
        "destination des chercheurs pour les aider dans leurs recherches sur l’alimentation et l’activité " +
        "physique des jeunes français.<br><br>J’ai mis en pratique mes capacités à concevoir et optimiser une " +
        "application existante ainsi qu'à faire des choix techniques décisifs. J’ai également su gérer la gestion " +
        "de ce projet en mettant en place des pratiques propres aux méthodes agiles telles que la méthode " +
        "SCRUM.<br><br>J’ai eu à utiliser des technologies du Web comme PHP, HTML & CSS ainsi que Bootstrap. " +
        "Pour la gestion des données, j’ai mis en place une base de données SQL. Nous avons également dû porter " +
        "une attention toute particulière au RGPD en raison de la manipulation de données de santé sensibles.",
    important: true
  },
  {
    duration: "2 mois",
    year: "2023",
    image: "inrae-grey.png",
    company: "INRAE",
    description: "CDD de 2 mois pour réaliser une version mobile multiplateforme en utilisant Flutter.",
    important: false
  },
  {
    duration: "1 an",
    year: "2024",
    image: "cikaba-blue.png",
    company: "Cikaba",
    description: "Alternance d'1 an.<br><br>J’ai eu l’opportunité de rejoindre une équipe dynamique et agréable " +
        "qui m’a permis de me professionnaliser dans un contexte favorable. J’ai travaillé en tant que développeur " +
        "frontend.<br><br>Cela a consisté principalement en l’élaboration d’une application web en Vue.js qui sert " +
        "de plateforme SSO pour centraliser l’authentification des utilisateurs sur une application. J’ai également " +
        "pu exploiter mes compétences en design d’interface pour produire des maquettes et prototypes afin " +
        "d’améliorer l’esthétique des applications en cours de développement.",
    important: true
  },
  {
    duration: "2 ans",
    year: "2024-2026",
    image: "cikaba-grey.png",
    company: "Cikaba",
    description: "2 années supplémentaires pour mon Mastère Expert en ingénierie logicielle.",
    important: false
  },
];
const projects = [
  {application: "MovieFinder", title: "J'ai créé l'application", image:"moviefinder-mockup.png"},
  {application: "JustMusic", title: "J'ai co-créé l'application", image:"justmusic-mockup.png"},
  {application: "Allin", title: "J'ai co-créé l'application", image:"allin-mockup.png"},
  {application: "Compagnon", title: "J'ai créé l'application", image:"compagnon-mockup.png"},

]


const currentProjectIndex = ref(0);
const currentProject = computed(() => {
  return Math.floor(currentProjectIndex.value);
});
const percentY = ref(0);
const opacity = ref(0);
const progress = ref(0);
// Variable to track if middle text is visible
const visibleTextIndex = ref(0);
// Function to check if middle text is visible
const checkVisibleTextIndex = () => {
  console.log(visibleTextIndex.value)
  const textElements = document.querySelectorAll('.magic-div > span');
  console.log(textElements)// Selecting all <p> elements
  textElements.forEach((element, index) => {
    const bounding = element.getBoundingClientRect(); // Getting the position of each <p> element
    if (bounding.top <= window.innerHeight - 500 && bounding.bottom >= 0) {
      visibleTextIndex.value = index;
    }
  });
  updateValue();
};

const updateValue = () => {
  const elContainer = document.querySelector('.magic-showcase');
  if (elContainer) {
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const clientHeight = elContainer.clientHeight;
    const offsetTop = elContainer.offsetTop;

    percentY.value =
        Math.min(clientHeight + halfH, Math.max(-screenH, window.scrollY - offsetTop) + halfH) /
        clientHeight;

    currentProjectIndex.value = Math.max(0, percentY.value * projects.length);
  }

  progress.value = Math.max(0, currentProjectIndex.value - currentProject.value);
  opacity.value = Math.min(1, Math.max(0, progress.value * 4));

  if (progress.value > 0.85 && currentProject.value < projects.length - 1) {
    opacity.value= Math.max(0, (1.0 - progress.value) * 4);
  }
};


// Hook to add and remove scroll event listener
onMounted(() => {
  window.addEventListener('scroll', checkVisibleTextIndex);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibleTextIndex);
});
</script>

<template>
  <div class=" absolute pointer-events-none w-full h-full overflow-clip">
    <img src="/src/assets/images/camera-effect.png" class="top-10 right-10 w-full h-full object-cover z-0 scale-110"
         alt="" width="1512" height="1071">
    <img src="/src/assets/images/filter.png" class="fixed bottom-0 right-0 w-full h-full object-cover z-50"
         alt="" width="1508" height="1376">
  </div>
  <Header id="about"></Header>
  <HeroContainer class=" mt-6 sm:mt-14"/>
  <ShowcaseBanner class=" mt-24 sm:mt-36 z-10 relative">
    <BannerCell number="1" label="ANNEE <br> D'EXPERIENCE"/>
    <BannerCell number="8" label="PROJETS <br> REALISES"/>
    <BannerCell number="+" label="FRONT-END <br> BACK-END"/>
    <BannerCell number="+" label="UI/UX <br> DESIGN"/>
  </ShowcaseBanner>
  <div class="flex-col flex pt-24 sm:pt-48 pb-28 z-10 relative" id="skills">
    <span class="mx-4 text-3xl sm:text-4xl text-center font-medium bg-gradient-to-r from-grey-50
    to-grey-100 bg-clip-text text-transparent px-10 ">
      {{ $t('skills-list.title.start')}}
      <span class="bg-blue text-white hover:bg-transparent hover:text-grey-75 ease-in-out transition-all duration-1000">
        {{ $t('skills-list.title.highlight')}}
      </span>
      <br>
      {{ $t('skills-list.title.end')}}
    </span>
    <GridSkill class="mx-8 sm:mx-28 py-28"/>
  </div>
  <ShowcaseBanner>
      <img v-for="langage in langages" :src="`/src/assets/images/${ langage.image}`"
           class="w-18 h-18 hover:-translate-y-1 transition-all duration-300 ease-in-out hover:rotate-12 origin-center"
           :alt="langage.name" width="64" height="64"/>
  </ShowcaseBanner>
  <div class="flex-col flex pt-48 z-10 relative" id="experiences">
    <span class="mx-4 text-3xl sm:text-4xl text-center font-medium bg-gradient-to-r from-grey-50 to-grey-100
    bg-clip-text text-transparent">
      Des expériences
      <span class="bg-blue text-white hover:bg-transparent hover:text-grey-75 ease-in-out transition-all duration-1000">
        professionnelles
      </span>
      qui m’ont
      <br>
      énormément apportés.
    </span>
    <ListExperience>
      <ExperienceCell v-for="experience in experiences" v-bind="experience" />
    </ListExperience>
  </div>
  <div class="flex-col flex z-50 justify-center align-middle px-14 sm:px-64 pb-14 sm:pb-96 top-0 ">
    <div class="magic-div flex flex-col justify-center align-middle sticky py-60 sm:py-72">
      <span :class="{ 'text-white scale-101': visibleTextIndex === 0, 'text-gray-600': visibleTextIndex !== 0 }"
            class="text-4xl sm:text-7xl font-bold transition-all ease-in-out duration-500">
        J’ai toujours envie de coder de nouveaux projets.
      </span>
      <span :class="{ 'text-white scale-101': visibleTextIndex === 1, 'text-gray-600': visibleTextIndex !== 1 }"
            class="text-4xl sm:text-7xl font-bold transition-all ease-in-out duration-500">
        Cette passion me pousse à créer des expériences.
      </span>
      <span :class="{ 'text-white scale-101': visibleTextIndex === 2, 'text-gray-600': visibleTextIndex !== 2 }"
            class="text-4xl sm:text-7xl font-bold transition-all ease-in-out duration-500">
        J’aime me réinventer et jouer avec les
        <span :class="{ 'text-yellow-300': visibleTextIndex === 2, 'text-gray-600': visibleTextIndex !== 2 }"
              class="transition-all ease-in-out duration-700">
          couleurs
        </span>
        et les
        <span :class="{ 'text-white': visibleTextIndex === 2, 'text-gray-600': visibleTextIndex !== 2 }"
              class="transition-all ease-in-out duration-700">
          {{ visibleTextIndex === 2 ? 'ForMEs' : 'formes'}}
        </span>
        .
      </span>
    </div>
    <div class="flex h-50 w-full"/>
  </div>
    <div class="flex h-300 w-full relative z-10 top-0 magic-showcase width-container" :style="{ height: projects.length * 100 + 'vh'}">
      <div class="absolute h-full w-full">
        <div class="sticky top-0 grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
          <div class="h-[30vh] bg-black lg:h-auto"></div>
          <div class="h-[70vh] bg-white lg:h-auto"></div>
        </div>
      </div>
      <div class="sticky top-0 h-screen overflow-hidden w-full" id="projects">
        <ProjectShow :text="`J'ai réalisé l'application`"
                     :application="projects[currentProject].application"
                     :image="projects[currentProject].image"
                     :title="projects[currentProject].title"
                     :opacity="opacity"
                     :progress="progress"/>
      </div>
    </div>
  <Footer></Footer>
</template>

<style scoped>

.width-container{
  width:calc( v-bind('projects.length') * 100 )"vh";
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
