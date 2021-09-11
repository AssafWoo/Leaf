import { AchievmentCardWrapper } from "./achievment_card_style";

const AchievmentCard = ({ item }) => {
	return (
		<AchievmentCardWrapper key={item.header}>
			<div className="container">
				<div className="card">
					<div className="face face1">
						<div className="content">{item.icon}</div>
					</div>
					<div className="face face2">
						<div className="content">
							<h4>{item.header}</h4>
							<p>{item.content}</p>
						</div>
					</div>
				</div>
			</div>
		</AchievmentCardWrapper>
	);
};

export default AchievmentCard;
