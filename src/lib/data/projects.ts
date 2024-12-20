import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { base } from '$app/paths';

export const items: Array<Project> = [
	{
		slug: 'prosa-tts',
		color: '#6AFB92',
		description: '',
		shortDescription:
			'Transform Your Content with Premium Synthetic Voice Solutions for Bahasa Indonesia',
		links: [{ to: 'https://tts.prosa.ai/', label: 'Homepage', newTab: true }],
		logo: Assets.Prosatts,
		name: 'Prosa Text-to-Speech (TTS)',
		period: {
			from: new Date('2021-04')
		},
		skills: getSkills(),
		type: 'Text-to-Speech (TTS) Solution Provider from Indonesia'
	},
	{
		slug: 'rizki-portfolio-svelte',
		color: '#0AFFFF',
		description: `I have developed this portfolio website to exhibit my skills and experiences. 
					It was implemented using Svelte, utilizing a template sourced from [this repository](https://github.com/RiadhAdrani/slick-portfolio-svelte).
					The site is hosted on GitHub Pages as a static webpage.
					Here, you can explore the technical stacks and skills I possess, view products and projects I have worked on, explore my professional experiences, educational background, and access my most recent curriculum vitae.
					  `,
		shortDescription: 'My personal portfolio website.',
		links: [
			{ to: 'https://github.com/qivaijar/rizki-svelte-portfolio', label: 'GitHub' },
			{ to: 'https://qivaijar.github.io/rizki-svelte-portfolio/', label: 'Portfolio Page' },
		],
		logo: Assets.Qivaijar,
		name: 'My Portfolio Website',
		period: {
			from: new Date('2024-09')
		},
		skills: getSkills('svelte', 'git'),
		type: 'Portfolio Website',
		screenshots: [
			{
				label: 'Home Page',
				src: "portfolio_website_home.png"
			},
			{
				label: 'Skills Page',
				src: "skills.png"
			},
			{
				label: 'Products / Projects Page',
				src: "projects.png"
			},
			{
				label: 'Experience Page',
				src: "experience.png"
			},
			{
				label: 'Education Page',
				src: "education.png"
			},
			{
				label: 'Resume Page',
				src: "resume.png"
			},
		]
	}
];

export const title = 'Products & Projects';
