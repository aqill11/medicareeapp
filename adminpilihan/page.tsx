'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Layout, Menu, Button, Typography, Row, Col, Popconfirm, Table } from 'antd'; // Import Table here
import { UserAddOutlined, AppstoreAddOutlined, LogoutOutlined, DeleteOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

// Delete Button component
const DeleteButton = ({ id, onDelete }: { id: string, onDelete: (id: string) => void }) => {
  return (
    <Popconfirm
      title="Are you sure you want to delete this doctor?"
      onConfirm={() => onDelete(id)}
      okText="Yes"
      cancelText="No"
    >
      <Button danger icon={<DeleteOutlined />} />
    </Popconfirm>
  );
};

const AdminCreateDoctor = () => {
  const [data, setData] = useState([
    { key: "1", no: "001", nama: "Dr Feronika", status: "Edit", poli: "Dokter Umum", tanggal: "2024-11-01" },
    { key: "2", no: "002", nama: "Dr Nabila Davega", status: "Edit", poli: "Dokter Umum", tanggal: "2024-11-02" },
    { key: "3", no: "003", nama: "Dr Rama Dani Putra", status: "Edit", poli: "Dokter Umum", tanggal: "2024-11-03" },
    { key: "4", no: "004", nama: "Dr Ulyandini", status: "Edit", poli: "Dokter Umum", tanggal: "2024-11-04" },
  ]);
  const router = useRouter(); 

  // Table columns definition
  const columns = [
    { title: "No", dataIndex: "no", key: "no" },
    { title: "Nama Dokter", dataIndex: "nama", key: "nama" },
    {
      title: "Edit",
      dataIndex: "status",
      key: "Edit",
      render: (text, record) => (
        <Link href={`/edit/${record.key}`} className="text-blue-600 hover:underline">
          {text}
        </Link>
      ),
    },
    { title: "Poli", dataIndex: "poli", key: "poli" },
    { title: "Tanggal", dataIndex: "tanggal", key: "tanggal" },
    {
      title: "Delete",
      key: "delete",
      render: (_, record) => <DeleteButton id={record.key} onDelete={handleDelete} />,
    },
  ];

  // Handle logout and redirect to login page
  const handleLogout = () => {
    router.push('/login');
  };

  // Handle the delete action
  const handleDelete = (id: string) => {
    const newData = data.filter((item) => item.key !== id);
    setData(newData); // Update the data state by removing the item
  };

  // Handle the "Back" button click to navigate to the previous page
  const handleBack = () => {
    router.back(); // Go back to the previous page in history
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Header */}
      <Header style={{ background: '#ffffff', padding: '0 20px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={3} style={{ margin: 0, color: '#1890ff' }}>MediCare Admin Panel</Title>
          </Col>
          <Col>
            <Button
              type="link"
              icon={<LogoutOutlined />}
              onClick={handleLogout}
              style={{ float: 'right', fontSize: '16px' }}
            >
              Logout
            </Button>
          </Col>
        </Row>
      </Header>

      <Layout style={{ padding: '0 1px' }}>
        {/* Sidebar */}
        <Sider width={200} className="site-layout-background" style={{ background: '#ffffff' }}>
          <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="1" icon={<UserAddOutlined />}>
              Membuat Dokter
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
              Membuat Spesialis
            </Menu.Item>
          </Menu>
        </Sider>

        {/* Content Area */}
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ padding: '50px 20px' }}>
            {/* Table with doctor data */}
            <div>
              <h2 className="text-2xl text-black font-sans mb-4">Data Dokter</h2>
              <Table
                columns={columns}
                dataSource={data}
                scroll={{ y: 400 }}
                pagination={false}
                rowClassName="ant-table-row"
                sticky
              />
            </div>
          </Content>
        </Layout>
      </Layout>

      {/* Back Button - Positioned at Bottom-Right */}
      <Button
        type="primary"
        icon={<ArrowLeftOutlined />}
        onClick={handleBack}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 100,
          borderRadius: '50%',
          padding: '16px',
          fontSize: '20px',
        }}
      >
        Back
      </Button>
    </Layout>
  );
};

export default AdminCreateDoctor;
