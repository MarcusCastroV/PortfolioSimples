export const getApiGitHub = async () => {
    const res = await fetch('https://api.github.com/users/MarcusCastroV/repos?sort=created&direction=desc')
    const data = await res.json()
    return data;
    
};
getApiGitHub()