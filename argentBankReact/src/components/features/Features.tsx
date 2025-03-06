import React from "react";

export interface FeaturesProps {
icon : string;
title : string;
description : string;

}


export const Feature :React.FC<FeaturesProps> = ({ icon, title, description }) => {
  return (
    <section className=" featuresSection">
      <img src={icon} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default Feature;