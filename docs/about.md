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
    title: 'Software Engineer and CS Student',
    links: [
      { icon: 'github', link: 'https://github.com/Norukh' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nico-fehr/' },
    ]
  },
]
</script>
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
        Get in touch with me
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>