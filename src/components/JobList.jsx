import { JobPosition } from './JobPosition';
import {useSelector} from "react-redux";
import {selectAllPositions} from "../store/positions/position-selectors";

const JobList = () => {
  const positions = useSelector(selectAllPositions)

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};
