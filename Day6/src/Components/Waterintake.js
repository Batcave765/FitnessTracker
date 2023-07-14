import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
function Waterintake() {
	return (
		<>
			<Navbar />
			<Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
			<div className="content">
				<div className="card">
					<div className="row card home ">
						<div className="card home">
							<h1>Water Intake</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Waterintake;
