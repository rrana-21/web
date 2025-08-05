/**
 * @typedef PortafolioData
 * @property {string} imgSrc Image URL
 * @property {string} title Card title
 * @property {string[]} skills Array with your skills e.g.: ['Python', 'R', 'SQL']
 * @property {string} descripcion Card description
 * @property {string} demoURL Demo page URL
 * @property {string} repoURL Repository URL, e.g.: https://github.com/rrana-21/repo
 * @property {string} anim Animation that will execute when the card loads
 * @property {number} averageBrightness How much brightness the card background color will have
 */

export const portafolioData = [
	{
		imgSrc: '/img/solar-recovery.png',
		title: 'Solar Recovery',
		skills: ['Python', 'PyTorch', 'Pandas', 'GCP'],
		descripcion:'Survival-analysis framework modeling time-to-recovery of utility-scale PV systems after adverse weather events.',
		repoURL: 'https://github.com/rrana-21/pv-recovery-modeling',
		anim: 'fade-right',
		averageBrightness: 0.3,
	},
	{
		imgSrc: '/img/memenet.png',
		title: 'MemeNet',
		skills: ['Python', 'PyTorch', 'GCP'],
		descripcion:'Deep multimodal classifier that fuses image and text embeddings to automatically detect hateful memes.',
		repoURL: 'https://github.com/rrana-21/DeepMemeNet',
		anim: 'fade-up',
		averageBrightness: 0.2,
	},
	{
		imgSrc: '/img/air-predict.png',
		title: 'Air Predict',
		skills: ['Python', 'SQL', 'Azure'],
		descripcion: 'Web app forecasting flight delays using historical and live flight data fed into ML models for on-time estimates.',
		repoURL: 'https://github.com/rrana-21/Flight-Delay-Prediction-App',
		anim: 'fade-left',
		averageBrightness: 0.4,
	},
	{
		imgSrc: '/img/auto-value.jpg',
		title: 'Auto Value',
		skills: ['Shiny', 'SQL'],
		descripcion:'Analytical toolkit using regression and market-trend features to predict used-car prices with high accuracy.',
		repoURL: 'https://github.com/rrana-21/Car-Price-Prediction-Analysis',
		anim: 'fade-right',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/lineup-pro.jpg',
		title: 'Lineup Pro',
		skills: ['Python', 'Pandas', 'Streamlit'],
		descripcion:'Optimization engine that recommends high-impact NBA starting lineups via player-stat algorithms and synergy scores.',
		repoURL: 'https://github.com/rrana-21/NBA-Lineup-Optimization',
		anim: 'fade-up',
		averageBrightness: 0.3,
	},
	{
		imgSrc: '/img/rain-stats.jpg',
		title: 'Rain Stats',
		skills: ['Python', 'Pandas', 'Streamlit'],
		descripcion: 'Exploratory and statistical analysis of historical rainfall, highlighting trends, anomalies, and seasonal patterns.',
		repoURL: 'https://github.com/rrana-21/Historical-Rainfall-Data-Analysis',
		anim: 'fade-left',
		averageBrightness: 0.2,
	}
];

const skillIcons = {
	Python: 'simple-icons:python',
	R: 'skill-icons:r-dark',
	SQL: 'simple-icons:mysql',
	Plotly: 'simple-icons:plotly',
	Streamlit: 'simple-icons:streamlit',
	Pandas: 'simple-icons:pandas',
	Shiny: 'simple-icons:r',
	'ggplot2': 'simple-icons:r',
	'dplyr': 'simple-icons:r',
	'Apache Airflow': 'simple-icons:apacheairflow',
	PyTorch: 'simple-icons:pytorch',
	PostgreSQL: 'skill-icons:postgresql-dark',
	'Scikit-learn': 'simple-icons:scikitlearn',
	TensorFlow: 'skill-icons:tensorflow-dark',
	Jupyter: 'skill-icons:jupyter-dark',
	Tableau: 'simple-icons:tableau',
	'Power BI': 'simple-icons:powerbi',
	MongoDB: 'skill-icons:mongodb',
	'D3.js': 'skill-icons:d3js-dark',
	JavaScript: 'skill-icons:javascript',
	CSS: 'skill-icons:css',
	HTML: 'skill-icons:html',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	GCP: 'simple-icons:googlecolab',
	Azure: 'simple-icons:microsoft'
};

/**
 * @description Maps the portfolioData so it has skill icons
 * You can learn about Array.map at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Place all previous item content
		...item,
		// Replace skills with corresponding icons
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});