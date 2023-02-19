import React from 'react'
import './scss/App.scss'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Employees from './Components/Employees'
import GroupedTeamMembers from './Components/GroupedTeamMembers'
import Nav from './Components/Nav'
import PageNotFound from './Components/PageNotFound'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App () {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamA'
  )

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem('employeeList')) || [
      {
        id: 1,
        fullName: 'Bob Jones',
        designation: 'JavaScript Developer',
        gender: 'male',
        teamName: 'TeamA'
      },
      {
        id: 2,
        fullName: 'Jill Bailey',
        designation: 'Node Developer',
        gender: 'female',
        teamName: 'TeamA'
      },
      {
        id: 3,
        fullName: 'Gail Shepherd',
        designation: 'Java Developer',
        gender: 'female',
        teamName: 'TeamA'
      },
      {
        id: 4,
        fullName: 'Sam Reynolds',
        designation: 'React Developer',
        gender: 'male',
        teamName: 'TeamB'
      },
      {
        id: 5,
        fullName: 'David Henry',
        designation: 'DotNet Developer',
        gender: 'male',
        teamName: 'TeamB'
      },
      {
        id: 6,
        fullName: 'Sarah Blake',
        designation: 'SQL Server DBA',
        gender: 'female',
        teamName: 'TeamB'
      },
      {
        id: 7,
        fullName: 'James Bennet',
        designation: 'Angular Developer',
        gender: 'male',
        teamName: 'TeamC'
      },
      {
        id: 8,
        fullName: 'Jessica Faye',
        designation: 'API Developer',
        gender: 'female',
        teamName: 'TeamC'
      },
      {
        id: 9,
        fullName: 'Lita Stone',
        designation: 'C++ Developer',
        gender: 'female',
        teamName: 'TeamC'
      },
      {
        id: 10,
        fullName: 'Daniel Young',
        designation: 'Python Developer',
        gender: 'male',
        teamName: 'TeamD'
      },
      {
        id: 11,
        fullName: 'Adrian Jacobs',
        designation: 'Vue Developer',
        gender: 'male',
        teamName: 'TeamD'
      },
      {
        id: 12,
        fullName: 'Devin Monroe',
        designation: 'Graphic Designer',
        gender: 'male',
        teamName: 'TeamD'
      }
    ]
  )

  function handleTeamSelectionChange (event) {
    setTeam(event.target.value)
  }

  function handleEmployeeCardClick (event) {
    const transformedEmployee = employees.map(employee =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: '' }
          : { ...employee, teamName: selectedTeam }
        : employee
    )

    setEmployees(transformedEmployee)
  }
  // Looks for Changes in the variables
  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees])

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])

  return (
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={
          employees.filter(employee => employee.teamName === selectedTeam)
            .length
        }
      />
      <Routes>
        <Route
          path='/'
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
              handleTeamSelectionChange={handleTeamSelectionChange}
            />
          }
        ></Route>
        <Route
          path='/GroupedTeamMembers'
          element={
            <GroupedTeamMembers
              employees={employees}
              selected={selectedTeam}
              setTeam={setTeam}
            />
          }
        ></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
