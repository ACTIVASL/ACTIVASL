import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Loader } from '@monorepo/ui-system';
import { PageTransition } from '../components/layout/PageTransition';
import { Patient, GroupSession, NavigationPayload } from '../lib/types';

// LAZY IMPORTS

const PatientsDirectory = lazy(() =>
  import('../features/patients/PatientsDirectory').then((m) => ({ default: m.PatientsDirectory })),
);
const PatientDetail = lazy(() =>
  import('../features/patients/PatientDetail').then((m) => ({ default: m.PatientDetail })),
);
const SessionsManager = lazy(() =>
  import('../features/sessions/SessionsManager').then((m) => ({ default: m.SessionsManager })),
);
const GroupSessionsHistory = lazy(() =>
  import('../features/sessions/GroupSessionsHistory').then((m) => ({
    default: m.GroupSessionsHistory,
  })),
);
const CalendarView = lazy(() =>
  import('../features/sessions/CalendarView').then((m) => ({ default: m.CalendarView })),
);
const SettingsView = lazy(() =>
  import('../features/settings/SettingsView').then((m) => ({ default: m.SettingsView })),
);
const DocumentationCenter = lazy(() =>
  import('../features/resources/DocumentationCenter').then((m) => ({
    default: m.DocumentationCenter,
  })),
);
const AuditView = lazy(() =>
  import('../features/settings/AuditView').then((m) => ({ default: m.AuditView })),
);
const ReportsView = lazy(() =>
  import('../features/reports/ReportsView').then((m) => ({ default: m.ReportsView })),
);
const BillingView = lazy(() =>
  import('../features/billing/BillingView').then((m) => ({ default: m.BillingView })),
);
const GroupDetailView = lazy(() =>
  import('../features/patients/GroupDetailView').then((m) => ({ default: m.GroupDetailView })),
);
const GroupsDirectory = lazy(() =>
  import('../features/patients/GroupsDirectory').then((m) => ({ default: m.GroupsDirectory })),
);
const StrategicCanvas = lazy(() => import('../features/canvas/StrategicCanvas'));

// WRAPPERS
import { useParams } from 'react-router-dom';

const PatientDetailWrapper: React.FC<{
  patients: Patient[];
  onBack: () => void;
  onUpdate: (p: Patient) => void;
}> = ({ patients, onBack, onUpdate }) => {
  const { id } = useParams();
  const patient = patients.find((p) => String(p.id) === id);
  if (!patient) return <div className="text-center p-10">Paciente no encontrado</div>;
  return <PatientDetail patient={patient} onBack={onBack} onUpdate={onUpdate} />;
};

interface AppRoutesProps {
  patients: Patient[];
  groupSessions: GroupSession[];
  onNavigate: (view: string, data?: NavigationPayload) => void;
  onUpdatePatient: (patient: Patient) => void;
  onNewPatient: (data: Omit<Patient, 'id'>) => void;
  onNewGroup: () => void;
  handleSaveGroupSession?: (data: GroupSession) => void;
  // UI Store Actions passed down as prop handlers for specific routes if needed
  onOpenGroupModal: (mode: 'schedule' | 'evolution', data?: GroupSession) => void;
  onOpenQuickAppointment: (mode: 'new' | 'existing') => void;
}

export const AppRoutes: React.FC<AppRoutesProps> = ({
  patients,
  groupSessions,
  onNavigate,
  onUpdatePatient,
  onNewPatient,
  onNewGroup,
  onOpenGroupModal,
  onOpenQuickAppointment,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <Loader />
        </div>
      }
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route
          path="/dashboard"
          element={
            <PageTransition>
              <StrategicCanvas />
            </PageTransition>
          }
        />

        <Route
          path="/patients"
          element={
            <PageTransition>
              <PatientsDirectory
                patients={patients}
                onSelectPatient={(p: Patient) => navigate(`/patients/${p.id}`)}
                onNewPatient={onNewPatient}
                initialFilter="all"
              />
            </PageTransition>
          }
        />
        <Route
          path="/patients/adults"
          element={
            <PageTransition>
              <PatientsDirectory
                patients={patients}
                onSelectPatient={(p: Patient) => navigate(`/patients/${p.id}`)}
                onNewPatient={onNewPatient as (p: Partial<Patient>) => void}
                initialFilter="adults"
              />
            </PageTransition>
          }
        />
        <Route
          path="/patients/kids"
          element={
            <PageTransition>
              <PatientsDirectory
                patients={patients}
                onSelectPatient={(p: Patient) => navigate(`/patients/${p.id}`)}
                onNewPatient={onNewPatient as (p: Partial<Patient>) => void}
                initialFilter="kids"
              />
            </PageTransition>
          }
        />

        <Route
          path="/patients/:id"
          element={
            <PageTransition>
              <PatientDetailWrapper
                patients={patients}
                onBack={() => navigate('/patients')}
                onUpdate={onUpdatePatient}
              />
            </PageTransition>
          }
        />

        <Route
          path="/groups/:groupName"
          element={
            <PageTransition>
              <GroupDetailView groupSessions={groupSessions} onBack={() => navigate('/patients')} />
            </PageTransition>
          }
        />

        <Route
          path="/groups"
          element={
            <PageTransition>
              <GroupsDirectory
                groupSessions={groupSessions}
                onSelectGroup={(gName) => navigate(`/groups/${encodeURIComponent(gName)}`)}
                onNewGroup={onNewGroup}
              />
            </PageTransition>
          }
        />
        <Route
          path="/sessions"
          element={
            <PageTransition>
              <SessionsManager
                patients={patients}
                onUpdatePatient={onUpdatePatient}
                filterMode="individual"
              />
            </PageTransition>
          }
        />
        <Route
          path="/sessions/group"
          element={
            <PageTransition>
              <SessionsManager
                patients={patients}
                groupSessions={groupSessions}
                onUpdatePatient={onUpdatePatient}
                filterMode="group"
              />
            </PageTransition>
          }
        />
        <Route
          path="/sessions/group-history"
          element={
            <PageTransition>
              <GroupSessionsHistory sessions={groupSessions} />
            </PageTransition>
          }
        />

        <Route
          path="/calendar"
          element={
            <PageTransition>
              <CalendarView
                patients={patients}
                groupSessions={groupSessions}
                onNavigate={onNavigate}
                onOpenGroupModal={onOpenGroupModal}
                onOpenSessionModal={() => { }}
                onOpenQuickAppointment={onOpenQuickAppointment}
              />
            </PageTransition>
          }
        />

        <Route path="/settings" element={<PageTransition><SettingsView /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><DocumentationCenter /></PageTransition>} />
        <Route path="/reports" element={<PageTransition><ReportsView /></PageTransition>} />
        <Route path="/audit" element={<PageTransition><AuditView /></PageTransition>} />
        <Route path="/billing" element={<PageTransition><BillingView /></PageTransition>} />
        <Route path="/canvas" element={
          <PageTransition>
            <StrategicCanvas />
          </PageTransition>
        } />

        {/* CATCH-ALL & LEGACY ROUTES */}
        <Route path="/auth/login" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Suspense>
  );
};
