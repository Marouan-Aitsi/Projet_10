import Edit from '../../components/Edit/Edit'
import { Account } from '../../components/Account/Account'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const User = () => {
      const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

      // Redirigez vers la page de connexion si l'utilisateur n'est pas connecté
      if (!isAuthenticated) {
            return <Navigate to="/" />;
      }
      return (
            <div>
                  <Edit />
                  <Account
                        title="Argent Bank Checking (x8349)"
                        total="$2,082.79"
                        description="Available Balance"
                  />
                  <Account
                        title="Argent Bank Savings (x6712)"
                        total="$10,928.42"
                        description="Available Balance"
                  />
                  <Account
                        title="Argent Bank Checking (x8349)"
                        total="$184.30"
                        description="Current Balance"
                  />
            </div>
      )
}