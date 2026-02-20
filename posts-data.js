// Shared posts data for index and post view
window.POSTS = [
	{
		id: '1',
		title: 'Researching Sports Science and Existing Apps',
		author: 'Seán Stratton',
		createdAt: '2025-10-01',
		content: 'In October, I dove deep into sports science, particularly focusing on sprinting mechanics. Understanding how athletes move and the techniques they use was crucial for developing an effective app. I also explored existing applications in the market, analyzing their features and identifying gaps that needed to be filled. This research phase laid the foundation for my app\'s design and functionality, ensuring it meets user needs effectively.'
	},
	{
		id: '2',
		title: 'Designing the App on Figma',
		author: 'Seán Stratton',
		createdAt: '2025-10-15',
		content: 'With research insights in hand, I shifted to designing the app interface using Figma. I aimed for a user-friendly experience that allows athletes to track their performance intuitively. The design process involved creating wireframes and prototypes, ensuring smooth navigation and aesthetic appeal. Feedback from peers helped refine the design, setting a solid groundwork for development.'
	},
	{
		id: '3',
		title: 'Getting Familiar with Dart',
		author: 'Seán Stratton',
		createdAt: '2025-11-01',
		content: 'As I transitioned from design to development, I dedicated time to learning Dart, the programming language behind Flutter. Familiarizing myself with Dart\'s syntax and features was essential for implementing the app\'s functionalities. I started with simple projects to build confidence before diving into the more complex aspects of the app\'s development.'
	},
	{
		id: '4',
		title: 'Implementing Pose Detection on Images',
		author: 'Seán Stratton',
		createdAt: '2025-11-15',
		content: 'After getting comfortable with Dart, I focused on integrating pose detection technology. The first step was processing images to identify key body landmarks using the Google ML Kit. This capability is crucial for analyzing an athlete\'s form and providing constructive feedback. The initial results were promising, showing potential in enhancing user experience.'
	},
	{
		id: '5',
		title: 'Extending Pose Detection to Uploaded Videos',
		author: 'Seán Stratton',
		createdAt: '2025-11-25',
		content: 'Building on the image processing capabilities, I extended pose detection to videos uploaded by users. This enhancement allows athletes to analyze their movements post-session, providing detailed feedback on their form and technique. To support this, I implemented frame extraction using FFmpeg to process individual video frames for pose analysis. While I faced challenges in ensuring the processing speed was efficient, I focused on optimizing algorithms to analyze video data without significant delays. This approach enables users to receive structured performance insights from their training sessions, making it a valuable feature for improving their sprinting techniques.'
	},
	{
		id: '6',
		title: 'Implementing Video Playback Features',
		author: 'Seán Stratton',
		createdAt: '2025-12-05',
		content: 'With the ability to analyze uploaded videos, I added video playback features to enhance user experience. This functionality allows athletes to review their recorded sessions, pausing and playing back key moments for detailed analysis. Integrating a simple yet effective interface for playback was essential, ensuring users could easily navigate through their training videos.'
	},
	{
		id: '7',
		title: 'Understanding Human Perception in Motion',
		author: 'Seán Stratton',
		createdAt: '2025-12-15',
		content: 'A significant part of the development involved exploring how the computer can perceive motion similarly to humans. This understanding is vital for accurately interpreting steps and movements. I conducted experiments with stationary cameras, aiming to optimize the system\'s ability to analyze motion in various environments.'
	},
	{
		id: '8',
		title: 'Defining Optimal Zone Length',
		author: 'Seán Stratton',
		createdAt: '2026-01-01',
		content: 'To improve pose detection accuracy, I established an optimal zone length of 10 meters. This distance ensures that enough data is collected for reliable analysis while minimizing detection errors. Fine-tuning this aspect was crucial for the app\'s overall performance and user satisfaction.'
	},
	{
		id: '9',
		title: 'Refining the Step Detector',
		author: 'Seán Stratton',
		createdAt: '2026-01-10',
		content: 'With the zone length defined, I focused on refining the step detector to handle jitters and fluctuations in pose detection. I implemented algorithms to filter out noise and ensure precise step detection. Continuous testing led to significant improvements, providing users with more reliable feedback on their performance.'
	},
	{
		id: '10',
		title: 'Refining Video Playback with Seek Controls',
		author: 'Seán Stratton',
		createdAt: '2026-01-20',
		content: 'To further enhance the video playback feature, I implemented seek controls, allowing users to jump to specific moments in their training sessions. This functionality is crucial for athletes who want to focus on particular aspects of their technique. The addition of these controls made the playback experience more user-friendly and efficient.'
	},
	{
		id: '11',
		title: 'Calculating Metrics and Providing Feedback',
		author: 'Seán Stratton',
		createdAt: '2026-02-05',
		content: 'At this stage, I began calculating various performance metrics based on the detected poses. These metrics include stride length, knee lift angles, and torso lean angles. Beyond simply calculating these values, I implemented a feedback system that interprets the metrics and provides meaningful insights to the user. The app now offers structured feedback based on an athleteâ€™s data, helping them understand their strengths and areas for improvement in their sprinting technique.'
	},
	{
		id: '12',
		title: 'User Testing',
		author: 'Seán Stratton',
		createdAt: '2026-02-18',
		content: 'Most recently, I conducted user testing sessions to observe how real users interacted with the app. Watching athletes navigate the interface and use the pose detection, video playback, and feedback features provided valuable insights. The testing process helped identify minor usability improvements and ensured that the app functions smoothly for athletes aiming to improve their sprinting performance.'
	},
	{
		id: '13',
		title: 'Draw My Run Foundation and Setup',
		author: 'Richard Ogunniyi',
		createdAt: '2026-01-03',
		content: 'I started by setting up the Draw My Run folder structure and cleaning import paths so the feature had a stable base before adding logic. This week focused on reducing early build friction and making the code easier to extend. The result was a cleaner baseline ready for run tracking, storage, and summary work.'
	},
	{
		id: '14',
		title: 'Storage and Route Tracking Pipeline',
		author: 'Richard Ogunniyi',
		createdAt: '2026-01-17',
		content: 'This phase implemented the core Draw My Run workflow using local persistence and route plotting. I integrated run history storage with SharedPreferences and improved map polyline behavior so route updates stayed consistent during active tracking. By the end of the week, completed sessions could be saved and loaded reliably.'
	},
	{
		id: '15',
		title: 'Run Summary Reliability and UI Polish',
		author: 'Richard Ogunniyi',
		createdAt: '2026-01-29',
		content: 'I focused on stabilizing start/stop lifecycle handling and improving summary readability. Serialization and session handling were tightened to reduce edge-case failures, while the summary layout was refined so users could scan key metrics faster. This week moved the feature from prototype behavior toward dependable usage.'
	},
	{
		id: '16',
		title: 'AI Feedback Integration and Navigation Consistency',
		author: 'Richard Ogunniyi',
		createdAt: '2026-02-13',
		content: 'I added AI feedback support into the Draw My Run model and summary flow, then aligned navigation patterns across instructions, map, history, and summary pages. UI consistency updates improved spacing, score presentation, and feedback readability. These changes made the end-to-end run experience feel more unified.'
	},
	{
		id: '17',
		title: 'Draw My Run Testing and Final Validation',
		author: 'Richard Ogunniyi',
		createdAt: '2026-02-20',
		content: 'I completed final Draw My Run validation with unit, integration, system, and user testing. Unit checks covered run model serialization and score logic, integration checks validated run storage round-trips, and system checks verified the start-run-stop flow through UI screens. User testing feedback highlighted minor usability improvements, and together these tests confirmed the feature was ready for submission.'
	}
];
