import React, { FunctionComponent } from 'react';
import Card from './Card';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const ALL_JOBS = gql`
  query AllJobs {
    jobs {
      id
      company
      new
      featured
      jobtitle
      posted
      type
      location
      role
      level
      languages
      tools
      image
    }
  }
`

const Cards: FunctionComponent = () => {

  type Job = {
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

  const { data, loading, error } = useQuery(ALL_JOBS);
  if (loading) return <div>Loading</div>
  if (error) return <p>ERROR</p>

  return (
    <div className="card-list">
      {data && data.jobs &&
        data.jobs.map((job:Job) => (
          <div key={job.id} className="card">
            <Card 
              id={job.id}
              company={job.company}
              new={job.new}
              featured={job.featured}
              jobtitle={job.jobtitle}
              posted={job.posted}
              type={job.type}
              location={job.location}
              role={job.role}
              level={job.level}
              languages={job.languages}
              tools={job.tools}
              image={job.image}
            />
          </div>
        ))
      }
    </div>
  )
}

export default Cards;