import Airplane from '@/icons/common/airplane.svg?react';
import { Skill } from '@/skill/Skill';
import { TExperience } from '../TExperience';

export const MroExperience: TExperience = {
  slug: 'mro',
  title: 'Aviation MRO',
  from: new Date('2018-07-01'),
  to: new Date('2020-01-01'),
  icon: <Airplane />,
  companyDescription:
    'A leading provider of maintenance, repair, overhaul and modification services for civil aircraft.',
  projectDescription:
    'An innovative and holistic platform that offers an extensive variety of digital products and services for MRO by combining multiple web-based apps in one place.',
  roles: [
    {
      title: 'Full-Stack Developer',
      description: [
        'Fredrik joined the team responsible for core frontend and backend components. His main task was to support the development of Java-based microservices using Vert.X, as well as Angular components. During his time there, Fredrik noticed the lack of tests and worked to raise awareness and coach the team on the importance of testing to mitigate future issues.',
      ],
    },
    {
      title: 'DevOps',
      description: [
        'A new team called Developer Experience was formed to improve the speed and quality of development across all other teams. During his time there, Fredrik developed concepts for easy application testing with Cypress, introduced Helm to facilitate reproducible deployments in an OpenShift environment, and helped set up SonarQube and Snyk to enhance code quality. He also implemented several Golang-based Prometheus exporters, a custom Usabilla-Jira connector using Kotlin, Quarkus, and GraalVM, and a secure method for handling secrets in microservices with HashiCorp Vault. To promote these tools and processes, Fredrik wrote documentation, blog posts, and conducted lightning talks. He occasionally joined other teams to assist them in adopting new concepts and tools.',
      ],
    },
  ],
  highlightedSkills: [Skill.Kotlin, Skill.VertX, Skill.TypeScript, Skill.Angular, Skill.Kubernetes],
  skills: [
    Skill.Java,
    Skill.Kotlin,
    Skill.VertX,
    Skill.TypeScript,
    Skill.SASS,
    Skill.Angular,
    Skill.Go,
    Skill.Helm,
    Skill.Kubernetes,
    Skill.Docker,
    Skill.Cypress,
    Skill.Jenkins,
    Skill.Kibana,
    Skill.Grafana,
    Skill.Prometheus,
    Skill.Scrum,
    Skill.UnitTesting,
    Skill.E2ETesting,
  ],
};
