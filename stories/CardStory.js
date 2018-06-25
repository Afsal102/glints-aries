import React from 'react';
import Card from './../src/Card';

const CardStories = () => {
  return (
    <div className="doc-mainbar">
      <h1>Glints Card</h1>
      <p>Usage: <code>{`import { Card } from '@glints-dev/glints-aries'`}</code></p>
      <p style={{color: 'red', fontSize: 20}}>Beta</p>
      <table className="doc-table">
        <thead>
          <tr>
            <th>
              Preview
            </th>
            <th>usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: 20}}>
              <Card 
                FeaturedImage={'http://www.pastamania.com.sg/wp-content/uploads/2016/02/new_content_image_careers-2.jpg'} 
                FeaturedLabel={'Special'} 
                CompanyLogo={'https://upload.wikimedia.org/wikipedia/commons/d/df/GLINTS_LOGO293.png'}
                CompanyName={'Glints'}
                JobTitle={'Software Engineer'}
                JobCategory={'Design'}
                JobSalary={'SGD 1000 - 2000'}
                JobLocation={'Singapore'}
                JobType={'Full-Time'}
              />
            </td>
            <td style={{verticalAlign: 'top', paddingTop: 20}}><pre>{`<Card
  FeaturedImage={'url'} 
  FeaturedLabel={'Special'} 
  CompanyLogo={'url'}
  CompanyName={'Glints'}
  JobTitle={'Software Engineer'}
  JobCategory={'Design'}
  JobSalary={'SGD 1000 - 2000'}
  JobLocation={'Singapore'}
  JobType={'Full-Time'}
/>`}</pre></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CardStories;
