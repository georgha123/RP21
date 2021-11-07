import React from 'react';
import {useState, useEffect} from 'react'
import { Table } from 'antd';


const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Text',
      dataIndex: 'text',
      key: 'text',
    },
    {
      title: 'Author',
      dataIndex: 'authorId',
      key: 'authorId',
    },
    {
        title: 'Created',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: 'Last changed',
        dataIndex: 'lastModified',
        key: 'lastModified',
    }
  ];

function ViewPosts() {
    const [isLoading, setIsLoading] = useState(true);
    const [dbData, setDbData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8081/api/post').then(res => {
            return res.json();
        }).then(data => {
            setIsLoading(false);
            setDbData(data);
            console.log(dbData);
        }).catch(e => console.log(e));
    }, [])

    if (isLoading) {
        return (
            <div>Postid laevad..</div>
        )
    }
    return(
        
        <Table columns={columns} dataSource={dbData} />
            
        
    );
}

export default ViewPosts;