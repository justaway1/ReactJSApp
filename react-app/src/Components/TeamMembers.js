import TeamMemberCard from './TeamMemberCard'

const TeamMembers = ({ employees, selectedTeam, handleEmployeeCardClick }) => {
  return employees.map(employee => (
    <TeamMemberCard
      employee={employee}
      selectedTeam={selectedTeam}
      handleEmployeeCardClick={handleEmployeeCardClick}
    />
  ))
}

export default TeamMembers
