import femaleProfile from '../images/femaleProfile.jpg'
import maleProfile from '../images/maleProfile.jpg'

const TeamMemberCard = ({
  employee,
  selectedTeam,
  handleEmployeeCardClick
}) => {
  return (
    <div
      key={employee.id}
      className={
        employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2'
      }
      id={employee.id}
      onClick={handleEmployeeCardClick}
    >
      {/* Check with ternary operator for gender  */}
      {employee.gender === 'male' ? (
        <img src={maleProfile} className='card-img-top' alt='maleProfile' />
      ) : (
        <img src={femaleProfile} className='card-img-top' alt='femaleProfile' />
      )}
      <div className='card-body'>
        <h3 className='card-title'>FullName: {employee.fullName}</h3>
        <p className='card-text'>
          <b>Designation: </b>
          {employee.designation}
        </p>
      </div>
    </div>
  )
}

export default TeamMemberCard
