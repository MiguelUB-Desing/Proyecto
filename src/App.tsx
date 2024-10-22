import React, { useState } from 'react';
import { Users, Clock, Calendar, FileText, BarChart2 } from 'lucide-react';
import EmployeeRegistry from './components/EmployeeRegistry';
import TimeTracking from './components/TimeTracking';
import LeaveManagement from './components/LeaveManagement';
import Reports from './components/Reports';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('employees');

  const renderContent = () => {
    switch (activeTab) {
      case 'employees':
        return <EmployeeRegistry />;
      case 'time':
        return <TimeTracking />;
      case 'leave':
        return <LeaveManagement />;
      case 'reports':
        return <Reports />;
      default:
        return <EmployeeRegistry />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <nav className="bg-indigo-800 text-white w-64 space-y-6 py-7 px-2">
        <div className="text-white flex items-center space-x-2 px-4">
          <Users className="w-8 h-8" />
          <span className="text-2xl font-extrabold">Gestor RRHH</span>
        </div>
        <ul className="space-y-2">
          <li>
            <button
              className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
                activeTab === 'employees' ? 'bg-indigo-900' : 'hover:bg-indigo-700'
              }`}
              onClick={() => setActiveTab('employees')}
            >
              <Users className="w-5 h-5" />
              <span>Empleados</span>
            </button>
          </li>
          <li>
            <button
              className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
                activeTab === 'time' ? 'bg-indigo-900' : 'hover:bg-indigo-700'
              }`}
              onClick={() => setActiveTab('time')}
            >
              <Clock className="w-5 h-5" />
              <span>Control de Tiempo</span>
            </button>
          </li>
          <li>
            <button
              className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
                activeTab === 'leave' ? 'bg-indigo-900' : 'hover:bg-indigo-700'
              }`}
              onClick={() => setActiveTab('leave')}
            >
              <Calendar className="w-5 h-5" />
              <span>Gestión de Permisos</span>
            </button>
          </li>
          <li>
            <button
              className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
                activeTab === 'reports' ? 'bg-indigo-900' : 'hover:bg-indigo-700'
              }`}
              onClick={() => setActiveTab('reports')}
            >
              <BarChart2 className="w-5 h-5" />
              <span>Informes</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-semibold mb-6">
          {activeTab === 'employees' && 'Registro de Empleados'}
          {activeTab === 'time' && 'Control de Tiempo'}
          {activeTab === 'leave' && 'Gestión de Permisos'}
          {activeTab === 'reports' && 'Informes'}
        </h1>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;