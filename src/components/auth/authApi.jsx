"use client"

export async function createUser(userData) {
  try {
    const response = await fetch('http://localhost:5001/api/users/register', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'content-type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      return { data };
    } else {
      const error = await response.text();
      throw error;
    }
  } catch (error) {
    // Handle errors if necessary
    console.error(error);
    throw error; // Re-throw the error for the calling code to handle
  }
}


export async function loginUser(loginInfo) {
  try {
    const response = await fetch('http://localhost:5001/api/users/login', {
      method: 'POST',
      body: JSON.stringify(loginInfo),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      return { data };
    } else {
      const error = await response.text();
      throw error;
    }
  } catch (error) {
    throw error;
  }
}

  
  export function checkAuth() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/check');
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }
  
  
  export function signOut(userId) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/logout');
        if (response.ok) {
          resolve({ data:'success' });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        console.log(error)
        reject( error );
      }
    });
  }
  
  
  export function resetPasswordRequest(email) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/reset-password-request', {
          method: 'POST',
          body: JSON.stringify({email}),
          headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }
  
  export function resetPassword(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/reset-password', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }
  