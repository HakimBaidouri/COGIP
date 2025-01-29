-- cogip_types
INSERT INTO types (id, name)
VALUES (1, 'Type A'),
       (2, 'Type B'),
       (3, 'Type C'),
       (4, 'Type D'),
       (5, 'Type E'),
       (6, 'Type F'),
       (7, 'Type G'),
       (8, 'Type H'),
       (9, 'Type I'),
       (10, 'Type J');

-- cogip_companies
INSERT INTO companies (id, name, type_id, country, tva, created_at, updated_at)
VALUES (1, 'Company A', 1, 'France', 'FR123456789', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (2, 'Company B', 2, 'Germany', 'DE123456789', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (3, 'Company C', 3, 'Spain', 'ES123456789', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (4, 'Company D', 4, 'Italy', 'IT123456789', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (5, 'Company E', 5, 'United Kingdom', 'GB123456789', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (6, 'Company F', 6, 'United States', 'US123456789', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (7, 'Company G', 7, 'Canada', 'CA123456789', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (8, 'Company H', 8, 'Australia', 'AU123456789', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (9, 'Company I', 9, 'Netherlands', 'NL123456789', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (10, 'Company J', 10, 'Sweden', 'SE123456789', '2023-03-15 10:00:00', '2023-03-15 10:00:00');


-- cogip_contacts
INSERT INTO contacts (id, name, company_id, email, phone, created_at, updated_at)
VALUES (1, 'Contact A', 1, 'contactA@companyA.com', '0123456789', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (2, 'Contact B', 2, 'contactB@companyB.com', '0123456788', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (3, 'Contact C', 3, 'contactC@companyC.com', '0123456787', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (4, 'Contact D', 4, 'contactD@companyD.com', '0123456786', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (5, 'Contact E', 5, 'contactE@companyE.com', '0123456785', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (6, 'Contact F', 6, 'contactF@companyF.com', '0123456784', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (7, 'Contact G', 7, 'contactG@companyG.com', '0123456783', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (8, 'Contact H', 8, 'contactH@companyH.com', '0123456782', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (9, 'Contact I', 9, 'contactI@companyI.com', '0123456781', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (10, 'Contact J', 10, 'contactJ@companyJ.com', '0123456780', '2023-03-15 10:00:00', '2023-03-15 10:00:00');

-- cogip_roles
INSERT INTO roles (id, name)
VALUES (1, 'Admin'),
       (2, 'User '),
       (3, 'Manager'),
       (4, 'Viewer');

-- cogip_permissions
INSERT INTO permissions (id, name)
VALUES (1, 'Read'),
       (2, 'Write'),
       (3, 'Delete'),
       (4, 'Update');

-- cogip_roles_permission
INSERT INTO roles_permission (permission_id, role_id)
VALUES (1, 1),
       (2, 1),
       (3, 1),
       (1, 2),
       (2, 2);

-- cogip_users
INSERT INTO users (id, first_name, role_id, last_name, email, password, created_at, updated_at)
VALUES (1, 'User  A', 1, 'Last A', 'userA@example.com', 'passwordA', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (2, 'User  B', 2, 'Last B', 'userB@example.com', 'passwordB', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (3, 'User  C', 3, 'Last C', 'userC@example.com', 'passwordC', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (4, 'User  D', 4, 'Last D', 'userD@example.com', 'passwordD', '2023-03-15 10:00:00', '2023-03-15 10:00:00 '),
       (5, 'User   E', 1, 'Last E', 'userE@example.com', 'passwordE', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (6, 'User   F', 2, 'Last F', 'userF@example.com', 'passwordF', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (7, 'User   G', 3, 'Last G', 'userG@example.com', 'passwordG', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (8, 'User   H', 4, 'Last H', 'userH@example.com', 'passwordH', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (9, 'User   I', 1, 'Last I', 'userI@example.com', 'passwordI', '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (10, 'User   J', 2, 'Last J', 'userJ@example.com', 'passwordJ', '2023-03-15 10:00:00', '2023-03-15 10:00:00');


-- cogip_invoices
INSERT INTO invoices (id, ref, company_id, created_at, updated_at)
VALUES (1, 'INV001', 1, '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (2, 'INV002', 2, '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (3, 'INV003', 3, '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (4, 'INV004', 4, '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (5, 'INV005', 5, '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (6, 'INV006', 6, '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (7, 'INV007', 7, '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (8, 'INV008', 8, '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (9, 'INV009', 9, '2023-03-15 10:00:00', '2023-03-15 10:00:00'),
       (10, 'INV010', 10, '2023-03-15 10:00:00', '2023-03-15 10:00:00');