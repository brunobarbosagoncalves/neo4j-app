FROM neo4j:latest

ENV NEO4J_dbms_memory_pagecache_size=1G
ENV NEO4J_dbms_memory_heap_initial_size=1G
ENV NEO4J_dbms_memory_heap_max__size=1G
ENV NEO4J_dbms_default__listen__address=0.0.0.0
ENV NEO4J_dbms_default__advertised__address=neo4j
ENV NEO4J_dbms_connector_bolt_advertised__address=0.0.0.0:7687
ENV NEO4J_dbms_connector_bolt_listen__address=0.0.0.0:7687
ENV NEO4J_dbms_connector_bolt_address=0.0.0.0:7687
ENV NEO4J_dbms_ssl_policy_bolt_client__auth=NONE
ENV NEO4J_dbms_ssl_policy_https_client__auth=NONE
ENV NEO4J_dbms_security_procedures_unrestricted=apoc.*
ENV NEO4J_apoc_import_file_enabled=true
ENV NEO4J_apoc_export_file_enabled=true
ENV NEO4J_ACCEPT_LICENSE_AGREEMENT=yes
ENV NEO4J_AUTH=none

EXPOSE 7473:7473
EXPOSE 7474:7474
EXPOSE 7687:7687

VOLUME ["./database/conf","/conf"]
VOLUME ["./database/data","/data"]
VOLUME ["./database/import","/import"]
VOLUME ["./database/logs","/logs"]
VOLUME ["./database/plugins","/plugins"]

