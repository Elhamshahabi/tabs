import React, { useEffect, useState } from "react";
import "./tabs.css";
const tabsData = [
	{
		id: 1,
		title: "Tab 1",
		body: (
			<div className="tab-content">
				<h2>tab 1</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iste
					soluta vero dicta itaque perferendis. Est illo alias soluta dolores
					unde iure veniam explicabo ipsum repellendus vero tempora, asperiores
					consectetur?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum,
					maiores necessitatibus dicta eveniet est expedita sapiente praesentium
					sit delectus minima animi, asperiores quam iste? Nostrum aliquam nam
					totam nihil!
				</p>
			</div>
		),
	},
	{
		id: 2,
		title: "Tab 2",
		body: (
			<div className="tab-content">
				<h2>tab 2</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iste
					soluta vero dicta itaque perferendis. Est illo alias soluta dolores
					unde iure veniam explicabo ipsum repellendus vero tempora, asperiores
					consectetur?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum,
					maiores necessitatibus dicta eveniet est expedita sapiente praesentium
					sit delectus minima animi, asperiores quam iste? Nostrum aliquam nam
					totam nihil!
				</p>
				<ul>
					<li>item 1</li>
					<li>item 2</li>
					<li>item 3 </li>
					<li>item 4</li>
					<li>item 5</li>
					<li>item 6</li>
				</ul>
			</div>
		),
	},
	{
		id: 3,
		title: "Tab 3",
		body: (
			<div className="tab-content">
				<h2>tab 3</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iste
					soluta vero dicta itaque perferendis. Est illo alias soluta dolores
					unde iure veniam explicabo ipsum repellendus vero tempora, asperiores
					consectetur?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum,
					maiores necessitatibus dicta eveniet est expedita sapiente praesentium
					sit delectus minima animi, asperiores quam iste? Nostrum aliquam nam
					totam nihil!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iste
					soluta vero dicta itaque perferendis. Est illo alias soluta dolores
					unde iure veniam explicabo ipsum repellendus vero tempora, asperiores
					consectetur?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum,
					maiores necessitatibus dicta eveniet est expedita sapiente praesentium
					sit delectus minima animi, asperiores quam iste? Nostrum aliquam nam
					totam nihil!
				</p>
			</div>
		),
	},
];

const Tabs = () => {
	const [tabActive, toggleTabActive] = useState(
		localStorage.getItem("activeTab") ? localStorage.getItem("activeTab") : 1,
	);
	const chagneActiveTab = id => {
		toggleTabActive(id);
		localStorage.setItem("activeTab", id);
	};
	return (
		<div className="tabs">
			<div className="btns">
				{tabsData.map(tab => (
					<button
						key={tab.id}
						onClick={() => chagneActiveTab(tab.id)}
						className={`${tab.id == tabActive ? "active" : ""}`}>
						{tab.title}
					</button>
				))}
			</div>
			<div className="container">
				<div className="contents">
					{tabsData.map(tab => (
						<div
							key={tab.id}
							className={`content-wrapper ${
								tab.id == tabActive ? "active" : ""
							}`}>
							{tab.body}
						</div>
					))}
				</div>
			</div>
			
		</div>
	);
};

export default Tabs;
