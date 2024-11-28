'use client'; 
import { useState } from 'react';
import { Form, Input, Button, notification, Layout, Typography, Menu, Upload, message } from 'antd';
import { UserOutlined, MedicineBoxOutlined, UserAddOutlined, AppstoreAddOutlined, UploadOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/es/upload/interface';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const AdminCreateDoctor = () => {
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);

  const onFinish = (values: any) => {
    setLoading(true);
    console.log('Received values:', values);

    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: 'Berhasil',
        description: 'Dokter telah berhasil dibuat.',
      });
    }, 1000);
  };

  const handleUploadChange = (info: any) => {
    let fileList = [...info.fileList];

    
    fileList = fileList.slice(-1);
    setFileList(fileList);

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      
      <Sider width={200} className="site-layout-background" style={{ background: '#ffffff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="2" icon={<UserAddOutlined />}>
            Membuat Dokter
          </Menu.Item>
          <Menu.Item key="1" icon={<AppstoreAddOutlined />}>
            Membuat Spesialis
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        
        <Content style={{ padding: '50px 20px' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', background: '#ffffff', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Title level={2} style={{ textAlign: 'center' }}>Membuat Spesialis</Title>
            <Form onFinish={onFinish} layout="vertical" initialValues={{ remember: true }}>

              
              <Form.Item label="Nama Spesialis" name="Spesialis" rules={[{ required: true, message: 'Silakan masukkan spesialisasi dokter!' }]}>
                <Input prefix={<MedicineBoxOutlined />} placeholder="Silakan masukkan nama spesialis baru!" />
              </Form.Item>

              
              <Form.Item label="Gambar Spesialis" name="foto" rules={[{ required: true, message: 'Silahkan upload gambar spesialis!' }]}>
                <Upload
                  action="/upload" 
                  listType="picture"
                  fileList={fileList}
                  onChange={handleUploadChange}
                  beforeUpload={(file: RcFile) => {
                    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                    if (!isJpgOrPng) {
                      message.error('You can only upload JPG/PNG file!');
                    }
                    return isJpgOrPng;
                  }}
                  showUploadList={{ showRemoveIcon: true }}
                >
                  <Button icon={<UploadOutlined />}>Klik Untuk Upload</Button>
                </Upload>
              </Form.Item>

              
              <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading}>
                  Buat Spesialis Baru
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>

        
        <Footer style={{ textAlign: 'center', backgroundColor: '#ffffff', padding: '20px 0', boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)' }}>
          <Typography.Text type="secondary">MediCare Admin Panel &copy; 2024</Typography.Text>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminCreateDoctor;
