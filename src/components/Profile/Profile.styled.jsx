import styled from '@emotion/styled';

export const Profiles = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: Arial, sans-serif;
  margin-bottom: 20px;
`;

export const ProfileDescription = styled.div`
  margin-bottom: 20px;
`;

export const ProfileAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 2px solid #ddd;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

export const TagLocation = styled.p`
  font-size: 14px;
  color: #777;
  margin: 0;
`;

export const Stats = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
  display: flex;
  justify-content: space-between;
`;

export const ListElement = styled.li`
  text-align: center;
`;

export const FolowersTitle = styled.span`
  display: block;
  font-size: 14px;
  color: #777;
`;
export const FolowersQuantyty = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;
