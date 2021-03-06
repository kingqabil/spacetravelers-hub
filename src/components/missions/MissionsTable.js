import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { createAction, JOIN_MISSION, LEAVE_MISSION } from '../../redux/missions/missions';

const updateMissionReservedStatus = (mission, dispatch) => {
  if (mission.reserved === true) {
    dispatch(createAction(LEAVE_MISSION, mission.id));
  } else {
    dispatch(createAction(JOIN_MISSION, mission.id));
  }
};

const MissionsTable = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  return (
    <div className="table-wrapper">
      <Table striped bordered>
        <thead>
          <tr>
            <th className="mission">Mission</th>
            <th className="description">Description</th>
            <th className="status">Status</th>
            <th className="reserve">{}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td className="center">
                <Badge size="sm" bg={mission.reserved ? 'success' : 'secondary'}>
                  {mission.reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}
                </Badge>
              </td>
              <td className="center">
                {' '}
                <Button
                  onClick={() => updateMissionReservedStatus(mission, dispatch)}
                  variant={mission.reserved ? 'outline-danger' : 'outline-secondary'}
                >
                  {mission.reserved ? 'LEAVE MISSION' : 'JOIN MISSION'}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MissionsTable;
