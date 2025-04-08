import React from "react";

export interface FeaturesProps {
icon : string;
title : string;
description : string;
alt : string;

}


export const Features :React.FC<FeaturesProps> = ({ icon, title, description, alt }) => {
  return (
    <section className=" featuresSection">
      <img className="featureIcon" src={icon} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default Features;