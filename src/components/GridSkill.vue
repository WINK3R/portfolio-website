<script setup>
import SkillCell from "./SkillCell.vue";

const skills = [
  {
    title: "Développement",
    text: "Mettre au point un produit fonctionnel tout en utilisant les dernières technologies.",
    image: "development.png",
    alt: "terminal icon"
  },
  {
    title: "Optimisation",
    text: "Concevoir en utilisant les patrons de conception adéquates, dans l’objectif de tirer le plein potentiel " +
        "de chaque projet.",
    image: "optimisation.png",
    alt: "gear icon"
  },
  {
    title: "Gestion de la donnée",
    text: "Administrer et gérer la gestion de l’information dans vos applications en élaborant une base de donnée " +
        "appropriée à vos besoins.",
    image: "data.png",
    alt: "data icon"
  },
  {
    title: "Collaboration",
    text: "Communiquer et travailler en équipe de façon optimale pour venir à bout de chaque projet.",
    image: "team.png",
    alt: "team icon"
  },
  {
    title: "Gestion de projet",
    text: "Savoir encadrer et prendre parti d’une gestion de projet agile en utilisant la méthode SCRUM.",
    image: "management.png",
    alt: "book of project icon"
  },
  {
    title: "Communication",
    text: "Administrer des systèmes communicants complexes pour permettre le fonctionnement d’un ecosystème.",
    image: "communication.png",
    alt: "communication icon"
  }
];
</script>

<template>
  <div class="grid gap-5 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
    <SkillCell v-for="(skill, index) in skills" :key="index" :title="skill.title" :text="skill.text" class="group">
      <img :src="`images/${ skill.image}`" :height="60" :width="60"
           class="h-7 w-7 group-hover:scale-110 transition-all ease-in duration-500 group-hover:brightness-200"
           :alt="skill.alt">
    </SkillCell>
  </div>
</template>