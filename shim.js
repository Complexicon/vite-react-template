import React from "react";
Promise.prototype.wrap = function () { return new Promise(r => this.then(ok => r([ok, null]), e => r([null, e]))) };
window.Show = ({ children, when }) => when ? (children || null) : null;
window.ForEach = function ForEach({ children, of = [] }) { return of.map((value, index) => React.createElement(React.Fragment, { key: index }, children(value, index))); }

if(!('theme' in localStorage)) {
	localStorage.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

if (localStorage.theme === 'dark') {
	document.documentElement.classList.add('dark');
	document.documentElement.setAttribute("data-theme", "dark");
} else {
	document.documentElement.classList.remove('dark');
	document.documentElement.setAttribute("data-theme", "light");
}
