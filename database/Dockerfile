FROM neo4j:latest

#disable login fot use database
ENV NEO4J_AUTH=none 
#memory configure
ENV NEO4J_dbms_memory_pagecache_size=1G
ENV NEO4J_dbms_memory_heap_initial__size=1G
ENV NEO4J_dbms_memory_heap_max__size=1G

ENV NEO4J_dbms_default__listen__address=0.0.0.0
ENV NEO4J_dbms_default__advertised__address=neo4j
ENV NEO4J_dbms_connector_bolt_advertised__address=0.0.0.0:7687
ENV NEO4J_dbms_connector_bolt_listen__address=0.0.0.0:7687
ENV NEO4J_dbms_connector_bolt_address=0.0.0.0:7687
#cancel login
ENV NEO4J_dbms_ssl_policy_bolt_client__auth=NONE
ENV NEO4J_dbms_ssl_policy_https_client__auth=NONE
ENV NEO4J_apoc_import_file_enabled=true
ENV NEO4J_apoc_export_file_enabled=true
ENV NEO4J_ACCEPT_LICENSE_AGREEMENT=yes

#Enable gds and apoc libs complete
ENV NEO4J_dbms_security_procedures_allowlist=apoc.*,gds.*
ENV NEO4J_dbms_security_procedures_unrestricted=apoc.*,gds.*
#Load GDS PLUGINS
ENV NEO4JLABS_PLUGINS='["apoc", "graph-data-science"]'

EXPOSE 7473:7473
EXPOSE 7474:7474
EXPOSE 7687:7687

VOLUME ["./database/data","/data"]
VOLUME ["./database/conf","/var/lib/neo4j/conf"]
VOLUME ["./database/import","/var/lib/neo4j/import"]
VOLUME ["./database/logs","/var/lib/neo4j/logs"]
VOLUME ["./database/plugins","/var/lib/neo4j/plugins"]