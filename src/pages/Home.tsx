import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { MyComponent } from "../components/Module";

export interface User {
	userid: number;
	modules: number[];
}

const Home: React.FC = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);

	const data: User = JSON.parse(params.get("data") || "");

	const [dataProcessed, setDataprocessed] = useState<User>({
		userid: 0,
		modules: [],
	});

	useEffect(() => {
		if (Array.isArray(data)) {
			const user = {
				userid: Number(data[0][0]),
				modules: data.map((item) => Number(item[1])),
			};
			setDataprocessed(user);
		}
	}, []);

	if (dataProcessed.userid === 0 && dataProcessed.modules.length === 0) {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent fullscreen>
					<IonHeader collapse="condense">
						<IonToolbar>
							<IonTitle size="large">Blank</IonTitle>
						</IonToolbar>
					</IonHeader>
				</IonContent>
			</IonPage>
		);
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Blank</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Blank</IonTitle>
					</IonToolbar>
				</IonHeader>

				<MyComponent {...dataProcessed} />
			</IonContent>
		</IonPage>
	);
};

export default Home;
