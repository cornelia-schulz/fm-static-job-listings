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
    <div className={"job-card" + (props.featured ? " cyan-left-border" : "")}>
      <div className="job">
        <div className="job-image">
          <img src={props.image} alt={props.company} />
        </div>
        <div className="job-details">
          <div className="company">
            {props.company &&
              <span className="company-name">{props.company}</span>
            }
            {props.new &&
              <span className="new-tag">NEW!</span>
            }
            {props.featured &&
              <span className="featured-tag">FEATURED</span>
            }
          </div>
          {props.jobtitle &&
            <h2>{props.jobtitle}</h2>
          }
          <div className="job-info">
            {props.posted &&
              <span>{props.posted}</span>
            }
            <span>&#8226;</span>
            {props.type &&
              <span>{props.type}</span>
            }
            <span>&#8226;</span>
            {props.location &&
              <span>{props.location}</span>
            }
          </div>
        </div>
      </div>
      <div className="job-tags">
        {props.role && 
          <span>{props.role}</span>
        }
        {props.level && 
          <span>{props.level}</span>
        }
        {props.languages && 
          props.languages.map((language) => (
            <span>{language}</span>
          ))
        }
        {props.tools &&
          props.tools.map((tool) => (
            <span>{tool}</span>
          ))
        }
      </div>
    </div>
  )
}

export default Card;