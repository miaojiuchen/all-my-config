const fontSize = 18;
var termCSS =
	`*{font-weight:normal!important;}
	.cursor-node{
		margin-left:${fontSize - 12}px;
		width:12px!important;
		height:2px!important;
		margin-top:${fontSize + 2}px;
		background-color:#3498DB!important;
		box-shadow:0 0 10px 1.2px #fff;
	}
	` +
	'::-webkit-scrollbar {background: transparent;width: 2px;}::-webkit-scrollbar-thumb {border-radius: 4px;background: #404040;}'
module.exports = {
	config: {
		// default font size in pixels for all tabs
		fontSize: fontSize,

		// font family with optional fallbacks
		fontFamily: 'monaco',

		// terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
		cursorColor: 'rgba(248,28,229,0.75)',

		// `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
		cursorShape: 'BLOCK',

		// color of the text
		foregroundColor: '#fff',

		// terminal background color
		backgroundColor: '#000',

		// border color (window, tabs)
		borderColor: '',

		// custom css to embed in the main window
		css: '.hyperterm_main{border: 1px solid rgba(217,0 ,0,0.3);box-shadow:0 0 10px #fff}',

		// custom css to embed in the terminal window
		termCSS: termCSS,

		// custom padding (css format, i.e.: `top right bottom left`)
		padding: '6px 12px',

		// the full list. if you're going to provide the full color palette,
		// including the 6 x 6 color cubes and the grayscale map, just provide
		// an array here instead of a color map object
		colors: {
			black: '#000000',
			red: '#ff0000',
			green: '#33ff00',
			yellow: '#ffff00',
			blue: '#0066ff',
			magenta: '#cc00ff',
			cyan: '#00ffff',
			white: '#d0d0d0',
			lightBlack: '#808080',
			lightRed: '#ff0000',
			lightGreen: '#33ff00',
			lightYellow: '#ffff00',
			lightBlue: '#0066ff',
			lightMagenta: '#cc00ff',
			lightCyan: '#00ffff',
			lightWhite: '#ffffff'
		},

		// the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
		// if left empty, your system's login shell will be used by default
		shell: ''

		// for advanced config flags please refer to https://hyperterm.org/#cfg
	},

	// a list of plugins to fetch and install from npm
	// format: [@org/]project[#version]
	// examples:
	//   `hyperpower`
	//   `@company/project`
	//   `project#1.0.1`
	plugins: [],

	// in development, you can create a directory under
	// `~/.hyperterm_plugins/local/` and include it here
	// to load it and avoid it being `npm install`ed
	localPlugins: []
};