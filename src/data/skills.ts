import type { SkillCategory } from '../types/portfolio'

export const skills = [
  {
    category: 'Academic',
    skills: [
      {
        label: 'IELTS 8.0',
        logoKey: 'ielts',
        logoLabel: 'IELTS English proficiency mark',
        logoAccent: '#4f8cff',
      },
      {
        label: 'ACT 35/36 (STEM)',
        logoKey: 'act',
        logoLabel: 'ACT STEM score mark',
        logoAccent: '#2dd4bf',
      },
      {
        label: 'SAT 800/800 (Chemistry)',
        logoKey: 'sat',
        logoLabel: 'SAT Chemistry score mark',
        logoAccent: '#f59e0b',
      },
    ],
  },
  {
    category: 'Professional',
    skills: [
      {
        label: 'Couchbase Certified Associate Architect',
        logoKey: 'couchbase',
        logoLabel: 'Couchbase certification logo',
        logoAccent: '#ea2328',
      },
      {
        label: 'Certified Kubernetes Application Developer',
        logoKey: 'kubernetes',
        logoLabel: 'Kubernetes certification logo',
        logoAccent: '#326ce5',
      },
      {
        label: 'GCP Cloud Engineering',
        logoKey: 'googlecloud',
        logoLabel: 'Google Cloud logo',
        logoAccent: '#4285f4',
      },
      {
        label: 'AWS Cloud Practitioner',
        logoKey: 'amazonwebservices',
        logoLabel: 'Amazon Web Services logo',
        logoAccent: '#ff9900',
      },
    ],
  },
  {
    category: 'Data Engineering',
    skills: [
      { label: 'GCP', logoKey: 'googlecloud', logoLabel: 'Google Cloud logo', logoAccent: '#4285f4' },
      { label: 'Hadoop', logoKey: 'apachehadoop', logoLabel: 'Apache Hadoop logo', logoAccent: '#f5dc00' },
      { label: 'Hive', logoKey: 'apachehive', logoLabel: 'Apache Hive logo', logoAccent: '#fdee21' },
      { label: 'Spark', logoKey: 'apachespark', logoLabel: 'Apache Spark logo', logoAccent: '#e25a1c' },
      { label: 'Kafka', logoKey: 'apachekafka', logoLabel: 'Apache Kafka logo', logoAccent: 'var(--text-100)' },
      { label: 'MySQL', logoKey: 'mysql', logoLabel: 'MySQL logo', logoAccent: '#4479a1' },
      { label: 'MongoDB', logoKey: 'mongodb', logoLabel: 'MongoDB logo', logoAccent: '#47a248' },
      { label: 'Couchbase', logoKey: 'couchbase', logoLabel: 'Couchbase logo', logoAccent: '#ea2328' },
      { label: 'Redis', logoKey: 'redis', logoLabel: 'Redis logo', logoAccent: '#dc382d' },
      { label: 'dbt', logoKey: 'dbt', logoLabel: 'dbt logo', logoAccent: '#ff694b' },
      { label: 'Iceberg', logoKey: 'apache', logoLabel: 'Apache Iceberg logo mark', logoAccent: '#d22128' },
    ],
  },
  {
    category: 'Data and ML',
    skills: [
      { label: 'SQL', logoKey: 'postgresql', logoLabel: 'SQL database logo mark', logoAccent: '#4169e1' },
      { label: 'Python', logoKey: 'python', logoLabel: 'Python logo', logoAccent: '#3776ab' },
      { label: 'Java', logoKey: 'openjdk', logoLabel: 'Java OpenJDK logo', logoAccent: '#e76f00' },
      { label: 'Scala', logoKey: 'scala', logoLabel: 'Scala logo', logoAccent: '#dc322f' },
      { label: 'Bash', logoKey: 'gnubash', logoLabel: 'GNU Bash logo', logoAccent: '#4eaa25' },
      { label: 'Airflow', logoKey: 'apacheairflow', logoLabel: 'Apache Airflow logo', logoAccent: '#017cee' },
      { label: 'Scikit-learn', logoKey: 'scikitlearn', logoLabel: 'Scikit-learn logo', logoAccent: '#f7931e' },
      { label: 'TensorFlow', logoKey: 'tensorflow', logoLabel: 'TensorFlow logo', logoAccent: '#ff6f00' },
      { label: 'PyTorch', logoKey: 'pytorch', logoLabel: 'PyTorch logo', logoAccent: '#ee4c2c' },
    ],
  },
  {
    category: 'DevOps and MLOps',
    skills: [
      { label: 'Linux', logoKey: 'linux', logoLabel: 'Linux logo', logoAccent: '#fcc624' },
      { label: 'Jenkins', logoKey: 'jenkins', logoLabel: 'Jenkins logo', logoAccent: '#d24939' },
      { label: 'Ansible', logoKey: 'ansible', logoLabel: 'Ansible logo', logoAccent: '#ee0000' },
      { label: 'Docker', logoKey: 'docker', logoLabel: 'Docker logo', logoAccent: '#2496ed' },
      { label: 'Kubernetes', logoKey: 'kubernetes', logoLabel: 'Kubernetes logo', logoAccent: '#326ce5' },
      { label: 'ELK', logoKey: 'elasticstack', logoLabel: 'Elastic Stack logo', logoAccent: '#005571' },
      { label: 'Prometheus', logoKey: 'prometheus', logoLabel: 'Prometheus logo', logoAccent: '#e6522c' },
      { label: 'Grafana', logoKey: 'grafana', logoLabel: 'Grafana logo', logoAccent: '#f46800' },
      { label: 'MLflow', logoKey: 'mlflow', logoLabel: 'MLflow logo', logoAccent: '#0194e2' },
    ],
  },
] satisfies SkillCategory[]
