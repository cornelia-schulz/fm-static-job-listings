import React, { FunctionComponent } from 'react';

interface iProps {
  id: string;
  company: string;
  featured: boolean;
  image: string;
  jobtitle: string;
  languages: string[];
  location: string;
  new: boolean;
  posted: string;
  role: string;
  level: string;
  tools: string[];
  type: string;
}

const Card: FunctionComponent<iProps> = props => {

  return (
    <div className="job-card">
      <div className="job-image">
        <img src={props.image} alt={props.company} />
      </div>
      

    </div>
  )
}

export default Card;