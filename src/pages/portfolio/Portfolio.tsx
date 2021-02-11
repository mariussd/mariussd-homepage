import React from 'react';

const Portfolio = () => {
	const [images, setImages] = React.useState<string[]>();

	React.useEffect(() => {
		fetch('https://mariussd.com/api/images')
			.then((res) => res.json())
			.then((res) => {
				setImages(res);
			});
	}, []);

	return (
		<div>
			<h1>Portfolio</h1>
			{images &&
				images.map((image, i) => {
					return <img key={i} src={`https://${image}/t`} />;
				})}
		</div>
	);
};

export default Portfolio;
