import { Route, Switch } from "react-router";
import TransactionsComponent from "../Pages/transactions";
import Achievments from "../Pages/achievments";
import APICallsComponent from "../Pages/api";
import Login from "../Pages/login";
import Dashboard from "../Pages/main-dashboard";
import Profile from "../Pages/profile";
import Signup from "../Pages/sign-up";
import ErrorPage from "../Pages/404";
import { Layout } from "../Layout/Layout";
import ProjectPage from "../Pages//transaction/transaction";
import ProjectsMarketplace from "../Pages/projects-protfolio/projects";
import { GlobalContext } from "../Context/global/global-context";
import { useContext, useState } from "react";
import { useEffect } from "react";

const Routes = () => {
	const { userState, _ } = useContext(GlobalContext);
	const [authUser, setAuthUser] = useState(false);
	useEffect(() => {
		if (localStorage.getItem("token")) {
			// i need to authenticate that the token is valid
			setAuthUser(true);
		} else {
			setAuthUser(false);
		}
	}, [userState]);

	return (
		<Switch>
			{authUser ? (
				<>
					<Layout>
						<Switch>
							<Route exact path="/profile" component={Profile} />
							<Route exact path="/api" component={APICallsComponent} />
							<Route
								exact
								path="/transactions"
								component={TransactionsComponent}
							/>
							<Route exact path="/achievments" component={Achievments} />
							<Route exact path="/projects" component={ProjectsMarketplace} />
							<Route exact path="/dashboard" component={Dashboard} />
							<Route exact path="/" component={Dashboard} />
							<Route path="/*" component={Dashboard} />
						</Switch>
					</Layout>
					<Route exact path="/projects/:id" component={ProjectPage} />
				</>
			) : (
				<Switch>
					<Route exact path="/error" component={ErrorPage} />
					<Route exact path="/projects/:id" component={ProjectPage} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/" component={Login} />
					<Route path="/*" component={ErrorPage} />
				</Switch>
			)}
		</Switch>
	);
};
export default Routes;
