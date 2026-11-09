const Dashboard = ({ username = "Shajhan" }) => {
	const firstName = username.trim().split(/\s+/)[0] || "there";

	return (
		<div className="dashboard">
			<style>{`
				* { box-sizing: border-box; }
				.dashboard { min-height: 100vh; background: #f7f8fc; color: #20243a; font-family: Inter, ui-sans-serif, system-ui, sans-serif; }
				.layout { max-width: 1240px; margin: auto; padding: 28px 36px 48px; }
				.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 48px; }
				.logo { font-size: 21px; font-weight: 800; letter-spacing: -1px; }
				.logo-mark { display: inline-grid; place-items: center; width: 30px; height: 30px; margin-right: 9px; border-radius: 9px; color: white; background: #6958e8; }
				.user { display: flex; align-items: center; gap: 11px; font-size: 14px; font-weight: 650; }
				.avatar { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 50%; color: #fff; background: linear-gradient(140deg, #9e91ff, #5946d6); }
				.welcome { display: flex; justify-content: space-between; align-items: end; gap: 20px; margin-bottom: 28px; }
				.welcome h1 { margin: 0; font-size: clamp(26px, 4vw, 34px); letter-spacing: -1.2px; }
				.welcome p { margin: 9px 0 0; color: #858ba0; font-size: 14px; }
				.date { color: #777e93; font-size: 13px; }
				.cards { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
				.card { padding: 22px; border: 1px solid #eceef5; border-radius: 15px; background: #fff; box-shadow: 0 5px 18px #252a4108; }
				.stat-label { color: #81879a; font-size: 13px; font-weight: 550; }
				.stat-value { margin: 14px 0 8px; font-size: 29px; font-weight: 750; letter-spacing: -1px; }
				.trend { color: #15996e; font-size: 12px; font-weight: 650; }
				.content { display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(270px, 1fr); gap: 16px; margin-top: 18px; }
				.card h2 { margin: 0 0 20px; font-size: 16px; }
				.activity { display: flex; justify-content: space-between; align-items: center; gap: 14px; padding: 15px 0; border-top: 1px solid #f0f1f5; font-size: 13px; }
				.activity-name { font-weight: 600; }
				.activity-meta { margin-top: 5px; color: #9298a8; font-size: 12px; }
				.badge { flex: 0 0 auto; padding: 6px 9px; border-radius: 20px; color: #12815f; background: #e9f8f2; font-size: 11px; font-weight: 650; }
				.badge.progress { color: #a76b0a; background: #fff5df; }
				.goal-copy { color: #858ba0; font-size: 13px; line-height: 1.6; }
				.goal-row { display: flex; justify-content: space-between; margin-top: 24px; font-size: 13px; }
				.goal-row span:last-child { color: #7d8295; }
				.track { height: 8px; margin-top: 12px; overflow: hidden; border-radius: 8px; background: #eeecfb; }
				.fill { width: 72%; height: 100%; border-radius: inherit; background: #6958e8; }
				@media (max-width: 760px) { .layout { padding: 22px 18px 36px; } .header { margin-bottom: 36px; } .cards { grid-template-columns: repeat(2, minmax(0, 1fr)); } .content { grid-template-columns: 1fr; } }
				@media (max-width: 440px) { .welcome { align-items: start; flex-direction: column; } .date { display: none; } .card { padding: 17px; } .user-name { display: none; } }
			`}</style>

			<div className="layout">
				<header className="header">
					<div className="logo"><span className="logo-mark">✦</span>orbit</div>
					<div className="user">
						<span className="avatar" aria-hidden="true">{username.charAt(0).toUpperCase()}</span>
						<span className="user-name">{username}</span>
					</div>
				</header>

				<main>
					<section className="welcome">
						<div>
							<h1>Welcome back, {firstName} 👋</h1>
							<p>Here’s an overview of your workspace today.</p>
						</div>
						<div className="date">Your dashboard at a glance</div>
					</section>

					<section className="cards" aria-label="Workspace statistics">
						{[
							{ label: "Total projects", value: "12", trend: "↗ 2 this month" },
							{ label: "Tasks completed", value: "48", trend: "↗ 12% this week" },
							{ label: "Hours tracked", value: "36.5", trend: "↗ 4.5 this week" },
							{ label: "Productivity", value: "84%", trend: "↗ 8% this month" },
						].map((stat) => (
							<article className="card" key={stat.label}>
								<div className="stat-label">{stat.label}</div>
								<div className="stat-value">{stat.value}</div>
								<div className="trend">{stat.trend}</div>
							</article>
						))}
					</section>

					<section className="content">
						<article className="card">
							<h2>Recent activity</h2>
							<div className="activity">
								<div><div className="activity-name">Website redesign</div><div className="activity-meta">Updated today</div></div>
								<span className="badge">Completed</span>
							</div>
							<div className="activity">
								<div><div className="activity-name">Team planning session</div><div className="activity-meta">Updated yesterday</div></div>
								<span className="badge progress">In progress</span>
							</div>
							<div className="activity">
								<div><div className="activity-name">Q3 campaign assets</div><div className="activity-meta">Updated yesterday</div></div>
								<span className="badge">Completed</span>
							</div>
						</article>

						<article className="card">
							<h2>Weekly goal</h2>
							<div className="goal-copy">You’re making great progress. Keep it up to reach your goal.</div>
							<div className="goal-row"><strong>Tasks completed</strong><span>18 / 25</span></div>
							<div className="track" role="progressbar" aria-label="Weekly goal progress" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
								<div className="fill" />
							</div>
							<div className="goal-copy" style={{ marginTop: 10 }}>72% of your weekly goal complete</div>
						</article>
					</section>
				</main>
			</div>
		</div>
	);
};

export default Dashboard;
