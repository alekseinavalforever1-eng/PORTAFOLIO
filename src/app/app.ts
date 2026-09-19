import { Component, signal, computed } from '@angular/core';
import {
  PROFILE_DATA,
  EXPERIENCE_DATA,
  PROJECTS_DATA,
  EDUCATION_DATA,
  ACHIEVEMENTS_DATA,
  CERTIFICATES_DATA,
  SKILLS_DATA,
  ProjectItem,
  CertificateItem,
  AchievementItem,
  SkillItem
} from './data/portfolio.data';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Datos principales
  readonly profile = PROFILE_DATA;
  readonly experience = EXPERIENCE_DATA;
  readonly projects = PROJECTS_DATA;
  readonly education = EDUCATION_DATA;
  readonly achievements = ACHIEVEMENTS_DATA;
  readonly certificates = CERTIFICATES_DATA;
  readonly allSkills = SKILLS_DATA;

  // Modo de color (false = Claro por defecto, true = Oscuro)
  readonly isDarkMode = signal<boolean>(false);

  // Índice del slider de proyectos (uno por uno con flechas)
  readonly currentProjectIndex = signal<number>(0);

  // Proyecto activo actual
  readonly activeProject = computed(() => this.projects[this.currentProjectIndex()]);

  // Índice de captura de pantalla activa dentro del proyecto seleccionado
  readonly activeScreenshotIndex = signal<number>(0);

  // Imagen activa a desplegar en el proyecto
  readonly activeProjectImage = computed(() => {
    const p = this.activeProject();
    if (p && p.screenshots && p.screenshots.length > 0) {
      const idx = this.activeScreenshotIndex();
      return p.screenshots[idx] || p.screenshots[0];
    }
    return p ? p.image : '';
  });

  // Filtro de skills
  readonly skillCategory = signal<string>('Todos');

  // Filtro de certificados
  readonly certCategory = signal<string>('Todas');

  // Modal de preview de certificado
  readonly activeCertModal = signal<CertificateItem | null>(null);

  // Estado para copiar correo/teléfono
  readonly copiedNotification = signal<string | null>(null);

  // Skills filtradas
  readonly filteredSkills = computed(() => {
    const category = this.skillCategory();
    if (category === 'Todos') return this.allSkills;
    return this.allSkills.filter((s) => s.category === category);
  });

  // Certificados filtrados
  readonly filteredCertificates = computed(() => {
    const category = this.certCategory();
    if (category === 'Todas') return this.certificates;
    return this.certificates.filter((c) => c.category === category);
  });

  constructor() {
    // Inicializar tema
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.isDarkMode.set(true);
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        this.isDarkMode.set(false);
        document.documentElement.removeAttribute('data-theme');
      }
    }
  }

  toggleTheme() {
    const next = !this.isDarkMode();
    this.isDarkMode.set(next);
    if (typeof window !== 'undefined') {
      if (next) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      }
    }
  }

  nextProject() {
    const next = (this.currentProjectIndex() + 1) % this.projects.length;
    this.currentProjectIndex.set(next);
    this.activeScreenshotIndex.set(0);
  }

  prevProject() {
    const prev = (this.currentProjectIndex() - 1 + this.projects.length) % this.projects.length;
    this.currentProjectIndex.set(prev);
    this.activeScreenshotIndex.set(0);
  }

  goToProject(index: number) {
    if (index >= 0 && index < this.projects.length) {
      this.currentProjectIndex.set(index);
      this.activeScreenshotIndex.set(0);
    }
  }

  setScreenshotIndex(index: number) {
    const p = this.activeProject();
    if (p && p.screenshots && index >= 0 && index < p.screenshots.length) {
      this.activeScreenshotIndex.set(index);
    }
  }

  setSkillCategory(category: string) {
    this.skillCategory.set(category);
  }

  setCertCategory(category: string) {
    this.certCategory.set(category);
  }

  openCertModal(cert: CertificateItem) {
    this.activeCertModal.set(cert);
  }

  closeCertModal() {
    this.activeCertModal.set(null);
  }

  copyToClipboard(text: string, label: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedNotification.set(label);
      setTimeout(() => {
        this.copiedNotification.set(null);
      }, 2200);
    });
  }
}
