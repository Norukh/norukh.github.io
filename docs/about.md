---
layout: page
aside: false
sidebar: false
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/nico.png',
    name: 'Nico Fehr',
    title: 'Software Engineer · BSc Computer Science, OST',
    links: [
      { icon: 'github', link: 'https://github.com/Norukh' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nico-fehr/' },
    ],
    desc: 'I’m an engineer who likes problems that don’t have an off-the-shelf answer.'
  },
]
</script>
<VPTeamPage style="{ }">
  <VPTeamPageTitle>
    <template #title>
      Hi I'm Nico
    </template>
    <template #lead>
      Feel free to get in touch.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>