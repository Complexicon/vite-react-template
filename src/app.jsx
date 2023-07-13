import { createRoot } from "react-dom/client";

function App() {

	return (
		<main className="flex items-center justify-center min-h-screen ">
			<div className="hero">
				<div className="hero-content text-center bg-base-300 rounded">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Hello there</h1>
						<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</main>
	);
}

createRoot(document.getElementById('app')).render(<App />);