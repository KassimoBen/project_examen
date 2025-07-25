import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import data from './database.json';

const getMentionName = (id) => {
  const mention = data.mention.find((m) => m.id === id);
  return mention ? mention.nom_mention : 'Unknown';
};

const getParcoursName = (id) => {
  const parcour = data.parcour.find((p) => p.id === id);
  return parcour ? parcour.nom_parcours : 'Unknown';
};

const getNiveauName = (id) => {
  const niveau = data.niveau.find((n) => n.id === id);
  return niveau ? niveau.nom_niveau : 'Unknown';
};

// styles
const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '0.9em',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#f3f3f3',
    minWidth: '500px',
  },
  th: {
    backgroundColor: '#009879',
    color: '#ffffff',
    textAlign: 'left',
    padding: '12px 15px',
  },
  td: {
    padding: '12px 15px',
    borderBottom: '1px solid #dddddd',
  },
  navBar: {
    backgroundColor: '#1877f2',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    height: '60px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '1em',
    padding: '4px 8px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    lineHeight: '24px',
  },
  activeLink: {
    fontWeight: 'bold',
    borderBottom: '3px solid white',
  },
  container: {
    padding: '10px',
    flexGrow: 1,
    overflowY: 'auto',
  },
  tableWrapper: {
    overflowX: 'auto',
    maxHeight: '65vh',
    overflowY: 'auto',
  },
  input: {
    marginBottom: '10px',
    padding: '6px 10px',
    width: '100%',
    maxWidth: '300px',
    fontSize: '1em',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
};

const EtudiantsList = () => {
  const [search, setSearch] = useState('');
  const filtered = data.etudiant.filter(e =>
    e.nom_etudiant.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Liste des étudiants</h2>
      <input
        type="text"
        placeholder="Rechercher par nom..."
        style={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Nom</th>
              <th style={styles.th}>Âge</th>
              <th style={styles.th}>Mention</th>
              <th style={styles.th}>Parcours</th>
              <th style={styles.th}>Niveau</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((etudiant, index) => (
              <tr
                key={etudiant.id}
                style={{ backgroundColor: index % 2 === 0 ? '#e0f7fa' : '#ffffff', cursor: 'pointer' }}
              >
                <td style={styles.td}>{etudiant.nom_etudiant}</td>
                <td style={styles.td}>{etudiant.age}</td>
                <td style={styles.td}>{getMentionName(etudiant.mention_id)}</td>
                <td style={styles.td}>{getParcoursName(etudiant.parcours_id)}</td>
                <td style={styles.td}>{getNiveauName(etudiant.niveau_id)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const MentionsList = () => {
  const [search, setSearch] = useState('');
  const filtered = data.mention.filter(m =>
    m.nom_mention.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Liste des mentions</h2>
      <input
        type="text"
        placeholder="Rechercher par nom..."
        style={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Nom de la mention</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((mention, index) => (
              <tr key={mention.id} style={{ backgroundColor: index % 2 === 0 ? '#fce4ec' : '#ffffff' }}>
                <td style={styles.td}>{mention.id}</td>
                <td style={styles.td}>{mention.nom_mention}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ParcoursList = () => {
  const [search, setSearch] = useState('');
  const filtered = data.parcour.filter(p =>
    p.nom_parcours.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Liste des parcours</h2>
      <input
        type="text"
        placeholder="Rechercher par nom..."
        style={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Nom du parcours</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((parcour, index) => (
              <tr key={parcour.id} style={{ backgroundColor: index % 2 === 0 ? '#fff3e0' : '#ffffff' }}>
                <td style={styles.td}>{parcour.id}</td>
                <td style={styles.td}>{parcour.nom_parcours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const NiveauxList = () => {
  const [search, setSearch] = useState('');
  const filtered = data.niveau.filter(n =>
    n.nom_niveau.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Liste des niveaux</h2>
      <input
        type="text"
        placeholder="Rechercher par nom..."
        style={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Nom du niveau</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((niveau, index) => (
              <tr key={niveau.id} style={{ backgroundColor: index % 2 === 0 ? '#e8f5e9' : '#ffffff' }}>
                <td style={styles.td}>{niveau.id}</td>
                <td style={styles.td}>{niveau.nom_niveau}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <header style={styles.navBar}>
          <h1 style={{ color: 'white', margin: '0 20px 0 0', fontSize: '1rem' }}>Gestion des étudiants</h1>
          <nav style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            <NavLink to="/etudiants" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}>Étudiants</NavLink>
            <NavLink to="/mentions" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}>Mentions</NavLink>
            <NavLink to="/parcours" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}>Parcours</NavLink>
            <NavLink to="/niveaux" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}>Niveaux</NavLink>
          </nav>
        </header>
        <main style={{ flexGrow: 1, overflow: 'auto' }}>
          <Routes>
            <Route path="/etudiants" element={<EtudiantsList />} />
            <Route path="/mentions" element={<MentionsList />} />
            <Route path="/parcours" element={<ParcoursList />} />
            <Route path="/niveaux" element={<NiveauxList />} />
            <Route path="*" element={<EtudiantsList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
